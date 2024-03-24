package tn.esprit.codemasters.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.codemasters.entity.Sprint;

public interface SprintRepository extends JpaRepository<Sprint,Long> {
}
