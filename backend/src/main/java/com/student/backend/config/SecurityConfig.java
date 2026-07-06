package com.student.backend.config;

import com.student.backend.security.OAuth2LoginSuccessHandler;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {
	
	
	private final OAuth2LoginSuccessHandler oAuth2LoginSuccessHandler;

	public SecurityConfig(OAuth2LoginSuccessHandler oAuth2LoginSuccessHandler) {
	    this.oAuth2LoginSuccessHandler = oAuth2LoginSuccessHandler;
	}

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

    	http
        .cors(cors -> {})
        .authorizeHttpRequests(auth -> auth
                .anyRequest().authenticated()
        )
        .oauth2Login(oauth -> oauth
                .successHandler(oAuth2LoginSuccessHandler)
        );

        return http.build();
    }
}