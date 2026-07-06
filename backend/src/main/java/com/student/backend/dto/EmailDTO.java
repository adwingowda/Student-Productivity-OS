package com.student.backend.dto;

public class EmailDTO {

    private String id;
    private String from;
    private String subject;
    private String snippet;
    private String date;

    public EmailDTO() {
    }

    public EmailDTO(String id, String from, String subject, String snippet, String date) {
        this.id = id;
        this.from = from;
        this.subject = subject;
        this.snippet = snippet;
        this.date = date;
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
}