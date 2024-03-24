package tn.esprit.codemasters.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tn.esprit.codemasters.entity.quiz.Test;

import java.util.List;

public interface TestRepository extends JpaRepository<Test,Long> {
    @Query("SELECT t FROM Test t JOIN t.questions q WHERE q.id = :questionId")
    List<Test> findAllByQuestionId(@Param("questionId") Long questionId);
}
