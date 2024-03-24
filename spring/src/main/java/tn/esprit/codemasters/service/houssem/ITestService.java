package tn.esprit.codemasters.service.houssem;

import tn.esprit.codemasters.entity.quiz.ApiOpenquizzdb;
import tn.esprit.codemasters.entity.quiz.Question;
import tn.esprit.codemasters.entity.quiz.Quizimport;
import tn.esprit.codemasters.entity.quiz.Test;
import tn.esprit.codemasters.entity.UserTest;

import java.util.List;

public interface ITestService {
    public String addTest(Test test);
    public void activateanactivate(Long testId);
    public void deletetest(Long testId);
    public String modifyTest(Long id,String title,String description);
    public List<Test> retrieveAllTests();
    public Test retrieveTest(Long testId);
    public String addquestiontotest(Long idTest, Question question);
    public void deletequestion(Long questionId);
    public void importquiz(Quizimport quiz,String imgnbr);

//
//
//
//
//
    public void addusertest(UserTest userTest);
    public List<UserTest> showalltests();
    //
    //
    public void addtestwithapi(List<ApiOpenquizzdb> apiOpenquizzdbs);

}
