package tn.esprit.codemasters.service.houssem;

import org.springframework.http.ResponseEntity;
import tn.esprit.codemasters.entity.user.Activities;
import tn.esprit.codemasters.entity.user.User;

import java.util.List;

public interface IUserService {
    public String addSimpleUser(User simpleuser);
    public String addUser(User advanceduser);
    public ResponseEntity<String> findbyemailandpassword(String email, String password);
    public User retrieveUser(Long userid);
    public String updateUser(User user);
    public String updatepersonalinformations(User user);
    public String updatePWDUser(Long userid,String oldpwd,String pwd);
    public String updateImgUser(Long userid,String image);
    public List<User> retrieveAllUsers();
    public void blockunblock(Long userid);
    public void modifyRole(Long userid,User.Role role);
    public String resetpwd(String email);
    //public String verifyaccount(String code);
    //public void deleteverificationcodes();
    public void removeaccount(Long idtoremove);
    public ResponseEntity<String> findbybarrcode(String barrcode);
    public User retrieveUserbyemail(String email);
    public String getmailbybarrcode(String code);
    public List<Activities> getallActivities();
    public void addcard(Long id,String Code);
    //public String generateUniqueCode(int length);

}
