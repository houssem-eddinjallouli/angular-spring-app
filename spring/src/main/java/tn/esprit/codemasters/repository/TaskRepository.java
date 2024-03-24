package tn.esprit.codemasters.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.codemasters.entity.Task;

public interface TaskRepository extends JpaRepository<Task,Long> {
}
