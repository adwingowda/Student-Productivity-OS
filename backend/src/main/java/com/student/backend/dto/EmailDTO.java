package com.student.backend.dto;

public class EmailDTO {

    private String id;
    private String from;
    private String subject;
    private String snippet;
    private String date;
    private String body;

    private EmailAnalysisDTO analysis;

    public EmailDTO() {
    }

    public EmailDTO(String id, String from, String subject,
                    String snippet, String date,
                    String body, EmailAnalysisDTO analysis) {

        this.id = id;
        this.from = from;
        this.subject = subject;
        this.snippet = snippet;
        this.date = date;
        this.body = body;
        this.analysis = analysis;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getFrom() {
        return from;
    }

    public void setFrom(String from) {
        this.from = from;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getSnippet() {
        return snippet;
    }

    public void setSnippet(String snippet) {
        this.snippet = snippet;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public EmailAnalysisDTO getAnalysis() {
        return analysis;
    }

    public void setAnalysis(EmailAnalysisDTO analysis) {
        this.analysis = analysis;
    }
}