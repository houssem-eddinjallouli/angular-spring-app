package tn.esprit.codemasters.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.codemasters.entity.UserStory;

public interface UserStoryRepository extends JpaRepository<UserStory,Long> {
}
