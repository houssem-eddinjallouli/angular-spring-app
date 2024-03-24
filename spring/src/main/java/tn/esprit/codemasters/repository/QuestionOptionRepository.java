package tn.esprit.codemasters.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.codemasters.entity.quiz.QuestionOption;

public interface QuestionOptionRepository extends JpaRepository<QuestionOption,Long> {
}
