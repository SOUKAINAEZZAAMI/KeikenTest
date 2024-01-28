package com.Keiken.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Keiken.Model.utilisateur;


public interface UtilisateurRepository extends JpaRepository<utilisateur,Long>{
	 utilisateur findByNom(String nom);
	 utilisateur findByNomAndPassword(String nom,String password);

}
