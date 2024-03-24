package tn.esprit.codemasters.entity;

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
public class Session {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;

    String name;
    @Temporal(TemporalType.DATE)
    Date date;
    @Temporal(TemporalType.TIME)
    Date time;
    boolean isclosed;

    int code;
    String url;


    //h
    @OneToMany(cascade = CascadeType.ALL)
    private Set<Message> messages;

    @ManyToOne(cascade = CascadeType.ALL)
    Card card;

    @OneToMany(cascade = CascadeType.ALL, mappedBy="session")
    private Set<FeedBack> feedBacks;

    @OneToOne
    private Project project;
}
