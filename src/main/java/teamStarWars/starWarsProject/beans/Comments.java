package teamStarWars.starWarsProject.beans;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Comments {

    //ATTRIBUTES
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ID;
    private String balise;
    private String name;
    private String content;
    private String author;


    //CONSTRUCTORS

    public Comments() {
    }

    public Comments(String name, String balise, String content, String author) {
        this.name = name;
        this.balise = balise;
        this.content = content;
        this.author = author;
    }
//GETTERS AND SETTERS

    public int getID() {
        return ID;
    }

    public void setID(int ID) {
        this.ID = ID;
    }

    public String getBalise() {
        return balise;
    }

    public void setBalise(String type) {
        this.balise = type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }


    //OVERRIDE


    @Override
    public String toString() {
        return "Comments{" +
                "ID=" + ID +
                ", name='" + name + '\'' +
                ", content='" + content + '\'' +
                ", author='" + author + '\'' +
                '}';
    }
}
