package com.Keiken.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Keiken.Model.PropositionsGPT;
import com.Keiken.Model.utilisateur;
import com.Keiken.Repository.PropositionGPTRepository;
import com.Keiken.Repository.UtilisateurRepository;

import lombok.Data;

@Service
@Data
public class PropositionsGPTService {
	@Autowired
	private PropositionGPTRepository proGPTRepository ;
     @Autowired
     private UtilisateurRepository userRepository;
	
	public PropositionsGPT ajouterProposition(long idUtilisateur,PropositionsGPT prop)
	{
		Optional<utilisateur> optionalUser = userRepository.findById(idUtilisateur);

	    if (optionalUser.isPresent()) {
	        utilisateur utilisateur = optionalUser.get();
	        prop.setUser(utilisateur);
	        return proGPTRepository.save(prop);
	    } else {
	        throw new NoSuchElementException("Utilisateur non trouvé avec l'ID : " + idUtilisateur);
	    }
		 
	}
	
	  public List<PropositionsGPT> getAllPropsGPT(long idUtilisateur) {
	        Optional<utilisateur> optionalUser = userRepository.findById(idUtilisateur);

	        if (optionalUser.isPresent()) {
	            utilisateur user = optionalUser.get();
	            return proGPTRepository.findByUserOrderByIdDesc(user);
	        } else {
	            throw new NoSuchElementException("Utilisateur non trouvé avec l'ID : " + idUtilisateur);
	        }
	    }

}
