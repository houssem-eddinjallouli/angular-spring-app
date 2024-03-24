package tn.esprit.codemasters.entity.user;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Date;
import java.util.Set;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level=AccessLevel.PRIVATE)
public class Activities {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;
    String activity;
    Date date;
    String email;
    }
