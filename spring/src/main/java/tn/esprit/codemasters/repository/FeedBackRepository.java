package tn.esprit.codemasters.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.codemasters.entity.FeedBack;

public interface FeedBackRepository extends JpaRepository<FeedBack,Long> {
}
