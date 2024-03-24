package tn.esprit.codemasters.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.codemasters.entity.Notification;

public interface NotificationRepository extends JpaRepository<Notification,Long> {
}
