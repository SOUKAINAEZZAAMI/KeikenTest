package com.Keiken.Model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor

public class utilisateur {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
    private String nom;
    private String password;
    @JsonManagedReference
	@OneToMany(mappedBy = "user")
    private List<PropositionsGPT>PropositionsGPT;


}
