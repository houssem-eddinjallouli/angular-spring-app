package tn.esprit.codemasters.entity.quiz;

import lombok.*;
import lombok.experimental.FieldDefaults;


@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level=AccessLevel.PRIVATE)
public class QQuizimportquestion {
    int id;
    String question;
    String[] propositions;
    String réponse;
    String anecdote;

}








