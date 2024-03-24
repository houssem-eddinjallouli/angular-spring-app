package tn.esprit.codemasters.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.codemasters.entity.Claim;

public interface ClaimRepository extends JpaRepository<Claim,Long> {
}
