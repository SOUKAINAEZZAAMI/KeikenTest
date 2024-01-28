package com.Keiken.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.Keiken.Model.PropositionsGPT;
import com.Keiken.Service.PropositionsGPTService;
import com.Keiken.Service.utilisateurService;

import lombok.Data;

@RestController
@Data
@CrossOrigin("*")
@RequestMapping("/Keiken_test")

public class GPT_Controller {

@Autowired
private PropositionsGPTService gptService;
	
	
	 @PostMapping("/utilisateurs/utilisateur/{userId}/propositions")
	    public PropositionsGPT addProposition(@PathVariable int userId, @RequestBody PropositionsGPT prop) {
		 PropositionsGPT propGPT = gptService.ajouterProposition(userId, prop);
	     return propGPT;
	    }
	 @GetMapping("/utilisateurs/utilisateur/{userId}/propositions")
	 public List<PropositionsGPT> getAllPropsGPTByUser(@PathVariable long userId) {
	        return gptService.getAllPropsGPT(userId);
	    }
}
