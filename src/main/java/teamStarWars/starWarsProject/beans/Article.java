package teamStarWars.starWarsProject.beans;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Article {

    //ATTRIBUTES
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ID;
    private String name;
    private String content;
    private String footer;


    //CONSTRUCTORS

    public Article() {
    }


    //GETTERS AND SETTERS


    //OVERRIDE


}
