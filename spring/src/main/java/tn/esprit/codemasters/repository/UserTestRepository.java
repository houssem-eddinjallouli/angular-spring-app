package tn.esprit.codemasters.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.codemasters.entity.UserTest;

public interface UserTestRepository extends JpaRepository<UserTest,Long> {
}
