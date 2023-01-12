package teamStarWars.starWarsProject.beans;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Comment {

//ATTRIBUTES
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ID;
    @ManyToOne(fetch = FetchType.EAGER)
    private User author;
    private String content;
    private String commentDate;


    //CONSTRUCTORS

    public Comment() {
    }

    public Comment(User author, String content, String commentDate) {
        this.author = author;
        this.content = content;
        this.commentDate = commentDate;
    }

//GETTERS AND SETTERS

    public int getID() {
        return ID;
    }
    public void setID(int ID) {
        this.ID = ID;
    }
    public String getContent() {
        return content;
    }
    public void setContent(String content) {
        this.content = content;
    }
    public User getAuthor() {
        return author;
    }
    public void setAuthor(User author) {
        this.author = author;
    }

    public String getCommentDate() {
        return commentDate;
    }

    public void setCommentDate(String commentDate) {
        this.commentDate = commentDate;
    }
//OVERRIDE

    @Override
    public String toString() {
        return "Comments{" +
                "ID=" + ID +
                ", author='" + author + '\'' +
                ", content='" + content + '\'' +
                ", commentDate='" + commentDate + '\'' +
                '}';
    }
}
