package tn.esprit.codemasters.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.codemasters.entity.SalaryBonus;

public interface SalaryBonusRepository extends JpaRepository<SalaryBonus,Long> {
}
