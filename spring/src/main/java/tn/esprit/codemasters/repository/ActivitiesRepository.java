package tn.esprit.codemasters.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.codemasters.entity.user.Activities;

public interface ActivitiesRepository extends JpaRepository<Activities,Long> {
}
