package teamStarWars.starWarsProject.beans;

import jakarta.persistence.*;

@Entity
public class Comment {

//ATTRIBUTES
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ID;
    private String author;
    private String content;
    private String commentDate;


    //CONSTRUCTORS

    public Comment() {
    }

    public Comment(String author, String content) {
        this.author = author;
        this.content = content;
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
    public String getAuthor() {
        return author;
    }
    public void setAuthor(String author) {
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
