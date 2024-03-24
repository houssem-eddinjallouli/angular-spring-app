package tn.esprit.codemasters.entity.quiz;

import lombok.*;
import lombok.experimental.FieldDefaults;


@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level=AccessLevel.PRIVATE)
public class Category {
    String catégorie;
    String nom;
    String slogan;
}




