package com.Keiken.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Keiken.Model.utilisateur;
import com.Keiken.Service.utilisateurService;


import lombok.Data;

@RestController
@Data
@CrossOrigin("*")
@RequestMapping("/Keiken_test")

public class utilisateurController {
	
	@Autowired
	private utilisateurService userservice;
	 @GetMapping("/user")
	public utilisateur getUser(@RequestParam String nom,@RequestParam String pass)
	{
		
		utilisateur utilisateur =  userservice.getUtilisateur(nom, pass);
	    return utilisateur;
		
	}
	 
   @PostMapping("/addUser")
   public utilisateur ajouterUtilisateur(@RequestBody utilisateur user) {
       return userservice.AjouterUtilisateur(user);
   }

}
