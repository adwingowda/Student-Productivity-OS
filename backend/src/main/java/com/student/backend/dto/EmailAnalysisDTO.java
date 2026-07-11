package com.student.backend.dto;

public class EmailAnalysisDTO {

    private String category;
    private String priority;
    private boolean requiresAction;
    private String deadline;
    private String action;
    private String summary;

    public EmailAnalysisDTO() {
    }

    public EmailAnalysisDTO(String category,
                            String priority,
                            boolean requiresAction,
                            String deadline,
                            String action,
                            String summary) {

        this.category = category;
        this.priority = priority;
        this.requiresAction = requiresAction;
        this.deadline = deadline;
        this.action = action;
        this.summary = summary;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getPriority() {
        return priority;
    }

    public void setPriority(String priority) {
        this.priority = priority;
    }

    public boolean isRequiresAction() {
        return requiresAction;
    }

    public void setRequiresAction(boolean requiresAction) {
        this.requiresAction = requiresAction;
    }

    public String getDeadline() {
        return deadline;
    }

    public void setDeadline(String deadline) {
        this.deadline = deadline;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }
}