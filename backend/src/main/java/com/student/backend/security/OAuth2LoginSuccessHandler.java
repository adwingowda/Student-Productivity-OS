package com.student.backend.security;

import java.io.IOException;

import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import com.student.backend.repository.UserRepository;
import com.student.backend.model.User;


import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class OAuth2LoginSuccessHandler implements AuthenticationSuccessHandler {
	
	private final UserRepository userRepository;
	
	public OAuth2LoginSuccessHandler(UserRepository userRepository) {
	    this.userRepository = userRepository;
	}
	
	@Override
	public void onAuthenticationSuccess(
	        HttpServletRequest request,
	        HttpServletResponse response,
	        Authentication authentication)
	        throws IOException, ServletException {
		
	    OAuth2User user = (OAuth2User) authentication.getPrincipal();

	    String name = user.getAttribute("name");
	    String email = user.getAttribute("email");
	    
	    if (userRepository.findByEmail(email).isEmpty()) {

	        User newUser = new User(name, email);

	        userRepository.save(newUser);

	        System.out.println("New user saved successfully.");

	    } else {

	        System.out.println("User already exists.");

	    }
	    
	    System.out.println("==================================");
	    System.out.println("Google Login Successful");
	    System.out.println("Name  : " + name);
	    System.out.println("Email : " + email);
	    System.out.println("==================================");
	    
	    response.sendRedirect("http://localhost:5173/dashboard");

	  
	}
}