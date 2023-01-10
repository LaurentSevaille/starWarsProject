package teamStarWars.starWarsProject.beans;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Article {

    //ATTRIBUTES
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int iD;
    @Column(unique=true)
    private String name;
    @Column(columnDefinition = "LONGTEXT")
    private String content;
    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<Comment> commentList = new ArrayList<>();

    //METHODS

    public void addCommentToArticle(Comment comment){
        commentList.add(comment);
    }

//CONSTRUCTORS

    public Article() {
    }

    public Article(String name, String content) {
        this.name = name;
        this.content = content;
    }



//GETTERS AND SETTERS
    public int getiD() {
        return iD;
    }
    public void setiD(int iD) {
        this.iD = iD;
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
    public List<Comment> getCommentList() {
        return commentList;
    }
    public void setCommentList(List<Comment> commentList) {
        this.commentList = commentList;
    }


    //OVERRIDE
    @Override
    public String toString() {
        return "Article{" +
                "iD=" + iD +
                ", name='" + name + '\'' +
                ", content='" + content + '\'' +
                ", commentsList=" + commentList +
                '}';
    }
}
