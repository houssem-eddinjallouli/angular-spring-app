package tn.esprit.codemasters.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import tn.esprit.codemasters.entity.user.User;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level=AccessLevel.PRIVATE)
public class SalaryBonus {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    double Value;

    //h
    @OneToOne
    private UserStory userstory;

    @ManyToOne(cascade = CascadeType.ALL)
    User user;
}
