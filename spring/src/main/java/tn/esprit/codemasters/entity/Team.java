package tn.esprit.codemasters.entity;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import tn.esprit.codemasters.entity.user.User;

import java.util.Set;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level=AccessLevel.PRIVATE)

//@Table(name = "equipes")
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    String name;


    @ManyToMany(mappedBy="teams", cascade = CascadeType.ALL)
    private Set<User> users;

    @OneToMany(cascade = CascadeType.ALL, mappedBy="team")
    private Set<Project> projects;
}
