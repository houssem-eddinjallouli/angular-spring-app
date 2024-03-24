package tn.esprit.codemasters.entity.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.hibernate.validator.constraints.UniqueElements;
import tn.esprit.codemasters.entity.*;

import java.util.Date;
import java.util.Set;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level=AccessLevel.PRIVATE)
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
        long id;
        //String name;
        String first_name;
        String last_name;
        @Column(unique = true)
        String email;
        String password;

        String image;

        @Enumerated(EnumType.STRING)
        Role role;
        @Temporal(TemporalType.DATE)
        Date birth_date;
        @Enumerated(EnumType.STRING)
        Gender gender;
        String address;
        String phone_number;
        String status;
        String barrcode;
        boolean enabled;//only the admin can update that
        boolean non_locked;//on creation by a simple user the account need to be verified
        boolean using_mfa;// inder construction
        @Temporal(TemporalType.DATE)
        Date created_date;


    public enum Gender{
        Homme,Femme,Non_Binaire,Genre_Fluide,Agender,Bigenre,Trigender,Genderqueer
    }
    public enum Role{
        PRODUCT_OWNER,DEVELOPER,SCRUM_MASTER,ADMIN
    }


    //h
    @ManyToMany(cascade = CascadeType.ALL)
    private Set<Notification> notifications;

    @OneToMany(cascade = CascadeType.ALL, mappedBy="user")
    private Set<Post> posts;
    //les developpeurs
    @ManyToMany(cascade = CascadeType.ALL)
    private Set<Team> teams;
    //product owner
    @OneToMany(cascade = CascadeType.ALL)
    private Set<Project> projectproductowner;
    //scrum master
    @OneToMany(cascade = CascadeType.ALL)
    private Set<Project> projectscrummaster;

    @OneToMany(cascade = CascadeType.ALL, mappedBy="user")
    private Set<Claim> claims;

    @OneToMany(cascade = CascadeType.ALL, mappedBy="user")
    private Set<UserStory> userStorys;

    //test
    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL, mappedBy="user")
    private Set<UserTest> userTests;
}
