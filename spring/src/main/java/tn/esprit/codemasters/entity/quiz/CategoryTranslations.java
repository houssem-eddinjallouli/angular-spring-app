package tn.esprit.codemasters.entity.quiz;

import lombok.*;
import lombok.experimental.FieldDefaults;


@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level=AccessLevel.PRIVATE)
public class CategoryTranslations {
    Category fr;
    Category en;
    Category es;
    Category it;
    Category de;
    Category nl;
}




