package com.Keiken.Model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data @AllArgsConstructor @NoArgsConstructor
public class PropositionsGPT {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int  id;
	private String Date;
	private String emplacement;
	private String ConditionsMeteo;
	 @Column(columnDefinition = "TEXT")
	private String proposition;
	 @JsonBackReference
	 @ManyToOne 
	private utilisateur user;

}
