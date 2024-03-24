package tn.esprit.codemasters.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.codemasters.entity.Post;

public interface PostRepository extends JpaRepository<Post,Long> {
}
