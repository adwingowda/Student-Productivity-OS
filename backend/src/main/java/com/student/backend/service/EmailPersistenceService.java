package com.student.backend.service;

import com.student.backend.dto.EmailAnalysisDTO;
import com.student.backend.entity.EmailEntity;
import com.student.backend.repository.EmailRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class EmailPersistenceService {

    private final EmailRepository emailRepository;

    public EmailPersistenceService(EmailRepository emailRepository) {
        this.emailRepository = emailRepository;
    }

    public Optional<EmailEntity> findByGmailId(String gmailId) {
        return emailRepository.findByGmailId(gmailId);
    }

    public EmailEntity saveEmailAnalysis(
            String gmailId,
            String sender,
            String subject,
            String snippet,
            EmailAnalysisDTO analysis) {

        EmailEntity entity = new EmailEntity();

        entity.setGmailId(gmailId);
        entity.setSender(sender);
        entity.setSubject(subject);
        entity.setSnippet(snippet);

        entity.setCategory(analysis.getCategory());
        entity.setPriority(analysis.getPriority());
        entity.setRequiresAction(analysis.isRequiresAction());
        entity.setDeadline(analysis.getDeadline());
        entity.setAction(analysis.getAction());
        entity.setSummary(analysis.getSummary());

        entity.setAnalyzed(true);

        return emailRepository.save(entity);
    }
}