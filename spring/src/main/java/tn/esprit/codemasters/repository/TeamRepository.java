package tn.esprit.codemasters.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.codemasters.entity.Team;

public interface TeamRepository extends JpaRepository<Team,Long> {
}
