package tn.esprit.codemasters.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.codemasters.entity.Project;

public interface ProjectRepository extends JpaRepository<Project,Long> {
}
