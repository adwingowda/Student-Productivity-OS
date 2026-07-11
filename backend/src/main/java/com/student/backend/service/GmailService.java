package com.student.backend.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.student.backend.dto.EmailAnalysisDTO;
import com.student.backend.dto.EmailDTO;
import com.student.backend.entity.EmailEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class GmailService {

    private final RestClient restClient;
    private final GeminiService geminiService;
    private final EmailPersistenceService emailPersistenceService;
    private final ObjectMapper objectMapper = new ObjectMapper();

    public GmailService(RestClient restClient,
                        GeminiService geminiService,
                        EmailPersistenceService emailPersistenceService) {

        this.restClient = restClient;
        this.geminiService = geminiService;
        this.emailPersistenceService = emailPersistenceService;
    }

    private String getHeaderValue(JsonNode headers, String headerName) {

        for (JsonNode header : headers) {
            if (header.get("name").asText().equalsIgnoreCase(headerName)) {
                return header.get("value").asText();
            }
        }

        return "";
    }

    // ==========================
    // FETCH INBOX
    // ==========================

    public List<EmailDTO> getInbox(OAuth2AuthorizedClient authorizedClient) throws Exception {

        String accessToken = authorizedClient.getAccessToken().getTokenValue();

        String response = restClient.get()
                .uri("https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=3")
                .header(HttpHeaders.AUTHORIZATION, "Bearer " + accessToken)
                .retrieve()
                .body(String.class);

        JsonNode root = objectMapper.readTree(response);

        List<EmailDTO> emails = new ArrayList<>();

        if (!root.has("messages")) {
            return emails;
        }

        for (JsonNode message : root.get("messages")) {

            String messageId = message.get("id").asText();

            String emailResponse = restClient.get()
                    .uri("https://gmail.googleapis.com/gmail/v1/users/me/messages/"
                            + messageId
                            + "?format=metadata")
                    .header(HttpHeaders.AUTHORIZATION, "Bearer " + accessToken)
                    .retrieve()
                    .body(String.class);

            JsonNode messageJson = objectMapper.readTree(emailResponse);

            JsonNode headers = messageJson.path("payload").path("headers");

            EmailDTO email = new EmailDTO();

            email.setId(messageId);
            email.setFrom(getHeaderValue(headers, "From"));
            email.setSubject(getHeaderValue(headers, "Subject"));
            email.setDate(getHeaderValue(headers, "Date"));
            email.setSnippet(messageJson.path("snippet").asText());

            // ==========================
            // CACHE CHECK
            // ==========================

            Optional<EmailEntity> cached =
                    emailPersistenceService.findByGmailId(messageId);

            if (cached.isPresent()) {

                EmailEntity entity = cached.get();

                EmailAnalysisDTO analysis = new EmailAnalysisDTO();

                analysis.setCategory(entity.getCategory());
                analysis.setPriority(entity.getPriority());
                analysis.setRequiresAction(entity.isRequiresAction());
                analysis.setDeadline(entity.getDeadline());
                analysis.setAction(entity.getAction());
                analysis.setSummary(entity.getSummary());

                email.setAnalysis(analysis);

            } else {

                EmailAnalysisDTO analysis = geminiService.analyzeEmail(
                        email.getSubject(),
                        email.getSnippet()
                );

                email.setAnalysis(analysis);

                emailPersistenceService.saveEmailAnalysis(
                        messageId,
                        email.getFrom(),
                        email.getSubject(),
                        email.getSnippet(),
                        analysis
                );
            }

            emails.add(email);
        }

        return emails;
    }

    // ==========================
    // FETCH SINGLE EMAIL
    // ==========================

    public EmailDTO getEmailById(String messageId,
                                 OAuth2AuthorizedClient authorizedClient) throws Exception {

        String accessToken = authorizedClient.getAccessToken().getTokenValue();

        String emailResponse = restClient.get()
                .uri("https://gmail.googleapis.com/gmail/v1/users/me/messages/"
                        + messageId
                        + "?format=full")
                .header(HttpHeaders.AUTHORIZATION, "Bearer " + accessToken)
                .retrieve()
                .body(String.class);

        JsonNode messageJson = objectMapper.readTree(emailResponse);

        JsonNode headers = messageJson.path("payload").path("headers");

        EmailDTO email = new EmailDTO();

        email.setId(messageId);
        email.setFrom(getHeaderValue(headers, "From"));
        email.setSubject(getHeaderValue(headers, "Subject"));
        email.setDate(getHeaderValue(headers, "Date"));
        email.setSnippet(messageJson.path("snippet").asText());

        return email;
    }
}