package tn.esprit.codemasters.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.codemasters.entity.Card;

public interface CardRepository extends JpaRepository<Card,Long> {
}
