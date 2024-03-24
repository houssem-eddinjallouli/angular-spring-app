package tn.esprit.codemasters.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.codemasters.entity.Message;

public interface MessageRepository extends JpaRepository<Message,Long> {
}
