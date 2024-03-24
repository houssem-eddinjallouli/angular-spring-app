package tn.esprit.codemasters.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.codemasters.entity.user.User;

public interface UserRepository extends JpaRepository<User,Long> {
    User getUserByEmail(String email);
    User getUserByBarrcode(String barrcode);
    User getUserByEmailAndPassword(String email,String password);
}
