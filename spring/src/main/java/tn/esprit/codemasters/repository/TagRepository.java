package tn.esprit.codemasters.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.codemasters.entity.Tag;

public interface TagRepository extends JpaRepository<Tag,Long> {
}
