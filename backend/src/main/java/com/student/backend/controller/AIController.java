package com.student.backend.controller;

import com.student.backend.dto.EmailAnalysisDTO;
import com.student.backend.dto.EmailDTO;
import com.student.backend.service.GeminiService;
import com.student.backend.service.GmailService;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.annotation.RegisteredOAuth2AuthorizedClient;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/ai")
public class AIController {

    private final GeminiService geminiService;
    private final GmailService gmailService;

    public AIController(GeminiService geminiService,
                        GmailService gmailService) {
        this.geminiService = geminiService;
        this.gmailService = gmailService;
    }

    @GetMapping("/analyze/{messageId}")
    public EmailAnalysisDTO analyzeEmail(
            @PathVariable String messageId,
            @RegisteredOAuth2AuthorizedClient("google")
            OAuth2AuthorizedClient authorizedClient) throws Exception {

        EmailDTO email = gmailService.getEmailById(messageId, authorizedClient);

        return geminiService.analyzeEmail(
                email.getSubject(),
                email.getSnippet()
        );
    }
}