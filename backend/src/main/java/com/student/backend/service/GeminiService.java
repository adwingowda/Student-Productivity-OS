package com.student.backend.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.student.backend.dto.EmailAnalysisDTO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.Map;

@Service
public class GeminiService {

    private final RestClient restClient;
    private final ObjectMapper objectMapper = new ObjectMapper();

    @Value("${gemini.api.key}")
    private String apiKey;

    private static final String GEMINI_URL =
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

    public GeminiService(RestClient restClient) {
        this.restClient = restClient;
    }

    public EmailAnalysisDTO analyzeEmail(String subject, String body) throws Exception {

        String prompt = """
You are StudyOS AI.

Your job is to analyze emails for university students.

Return ONLY valid JSON.

Do NOT use markdown.
Do NOT explain anything.
Do NOT wrap the JSON inside ```.

Return exactly this structure:

{
  "category":"",
  "priority":"",
  "requiresAction":false,
  "deadline":"",
  "action":"",
  "summary":""
}

Rules:

CATEGORY must be exactly one of:

Placement
Internship
College
Assignment
Exam
Result
Scholarship
Event
Personal
Promotion
Spam
Other

PRIORITY must be exactly one of:

High
Medium
Low

REQUIRESACTION:

true if the student should do something.
false otherwise.

DEADLINE:

If no deadline exists return "None".

ACTION:

Maximum 8 words.

SUMMARY:

Maximum 20 words.

EMAIL SUBJECT:
"""
        + subject +
"""

EMAIL CONTENT:
"""
        + body;

        Map<String, Object> requestBody = Map.of(
                "contents", new Object[]{
                        Map.of(
                                "parts", new Object[]{
                                        Map.of("text", prompt)
                                }
                        )
                }
        );

        String response = restClient.post()
                .uri(GEMINI_URL)
                .header("x-goog-api-key", apiKey)
                .contentType(MediaType.APPLICATION_JSON)
                .body(requestBody)
                .retrieve()
                .body(String.class);

        JsonNode root = objectMapper.readTree(response);

        String aiResponse = root
                .path("candidates")
                .get(0)
                .path("content")
                .path("parts")
                .get(0)
                .path("text")
                .asText();

        return objectMapper.readValue(aiResponse, EmailAnalysisDTO.class);
    }
}