package tn.esprit.codemasters.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
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

@Table(name = "comments")//
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long Id;
    String content;

    @ManyToOne
    @JoinColumn(name = "post_id")
    @JsonBackReference // Utilisation de @JsonBackReference pour éviter la récursion
    private Post post;



    //h
    @ManyToOne(cascade = CascadeType.ALL)
    User user;

}
