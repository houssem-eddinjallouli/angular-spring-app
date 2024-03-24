package tn.esprit.codemasters.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.codemasters.entity.Comment;

public interface CommentRepository extends JpaRepository<Comment,Long> {
}
