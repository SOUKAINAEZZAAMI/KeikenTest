package com.Keiken.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Keiken.Model.PropositionsGPT;
import com.Keiken.Model.utilisateur;


public interface PropositionGPTRepository extends JpaRepository<PropositionsGPT, Long>{
    List<PropositionsGPT> findByUserOrderByIdDesc(utilisateur user);


}
