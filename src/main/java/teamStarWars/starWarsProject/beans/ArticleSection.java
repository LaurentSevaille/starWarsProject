package teamStarWars.starWarsProject.beans;

import jakarta.persistence.*;

//@Entity
public class ArticleSection {

//ATTRIBUTES
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int iD;
    String balise;
    String content;


//CONSTRUCTORS
    public ArticleSection() {
    }

    public ArticleSection(String balise, String content) {
        this.balise = balise;
        this.content = content;
    }


//GETTERS AND SETTERS
    public int getiD() {
        return iD;
    }
    public void setiD(int iD) {
        this.iD = iD;
    }
    public String getBalise() {
        return balise;
    }
    public void setBalise(String balise) {
        this.balise = balise;
    }
    public String getContent() {
        return content;
    }
    public void setContent(String content) {
        this.content = content;
    }


    //OVERRIDE
    @Override
    public String toString() {
        return "ArticleSection{" +
                "iD=" + iD +
                ", content='" + content + '\'' +
                '}';
    }
}
