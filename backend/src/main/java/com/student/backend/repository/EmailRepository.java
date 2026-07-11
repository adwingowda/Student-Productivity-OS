package com.student.backend.repository;

import com.student.backend.entity.EmailEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EmailRepository extends JpaRepository<EmailEntity, String> {

    Optional<EmailEntity> findByGmailId(String gmailId);

}