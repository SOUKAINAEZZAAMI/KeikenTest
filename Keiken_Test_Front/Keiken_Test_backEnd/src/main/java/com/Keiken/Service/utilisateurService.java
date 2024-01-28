package com.Keiken.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Keiken.Model.utilisateur;
import com.Keiken.Repository.UtilisateurRepository;


import lombok.Data;


@Service
@Data
public class utilisateurService {
	@Autowired
    private UtilisateurRepository utilisateurRepository;

	
	public utilisateur AjouterUtilisateur(utilisateur utilisateur)
	{
		String nom=utilisateur.getNom();
        utilisateur utilisateurExist = utilisateurRepository.findByNom(nom);
        if (utilisateurExist == null) {
           return utilisateurRepository.save(utilisateur);
        } else {
            throw new RuntimeException("Un utilisateur avec ce nom existe déjà.");
        }
		
	}
	
	public utilisateur getUtilisateur(String nom,String Password)
	{
        utilisateur utilisateur = utilisateurRepository.findByNomAndPassword(nom,Password);
        if (utilisateur != null) {
            return utilisateur;
        } else {
            return null; 
        }
		
	}
}
