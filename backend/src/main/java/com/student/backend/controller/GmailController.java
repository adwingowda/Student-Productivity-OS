package com.student.backend.controller;

import com.student.backend.service.GmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GmailController {

    @Autowired
    private GmailService gmailService;

}