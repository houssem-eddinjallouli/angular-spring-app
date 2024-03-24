package tn.esprit.codemasters.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import tn.esprit.codemasters.entity.quiz.Test;
import tn.esprit.codemasters.entity.user.User;

import java.util.Date;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level=AccessLevel.PRIVATE)
public class UserTest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    int score;
    @Temporal(TemporalType.DATE)
    Date date;

    @ManyToOne
    User user;

    @ManyToOne
    Test test;
    }
