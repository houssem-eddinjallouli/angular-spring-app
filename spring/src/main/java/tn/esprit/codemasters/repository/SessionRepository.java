package tn.esprit.codemasters.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.codemasters.entity.Session;

public interface SessionRepository extends JpaRepository<Session,Long> {
}
