package com.student.backend.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.student.backend.dto.EmailDTO;
import org.springframework.http.HttpHeaders;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.ArrayList;
import java.util.List;

@Service
public class GmailService {

    private final RestClient restClient;
    private final ObjectMapper objectMapper = new ObjectMapper();

    public GmailService(RestClient restClient) {
        this.restClient = restClient;
    }

    private String getHeaderValue(JsonNode headers, String headerName) {

        for (JsonNode header : headers) {
            if (header.get("name").asText().equalsIgnoreCase(headerName)) {
                return header.get("value").asText();
            }
        }

        return "";
    }

    public List<EmailDTO> getInbox(OAuth2AuthorizedClient authorizedClient) throws Exception {

        String accessToken = authorizedClient.getAccessToken().getTokenValue();

        String response = restClient.get()
                .uri("https://gmail.googleapis.com/gmail/v1/users/me/messages?maxResults=10")
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

            JsonNode headers = messageJson.get("payload").get("headers");

            EmailDTO email = new EmailDTO();

            email.setId(messageId);
            email.setFrom(getHeaderValue(headers, "From"));
            email.setSubject(getHeaderValue(headers, "Subject"));
            email.setDate(getHeaderValue(headers, "Date"));
            email.setSnippet(messageJson.path("snippet").asText());

            emails.add(email);
        }

        return emails;
    }
}