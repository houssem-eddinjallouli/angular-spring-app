package tn.esprit.codemasters.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.codemasters.entity.Vote;

public interface VoteRepository extends JpaRepository<Vote,Long> {
}
