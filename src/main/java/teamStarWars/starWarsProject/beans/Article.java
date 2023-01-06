package teamStarWars.starWarsProject.beans;

import jakarta.persistence.*;

@Entity
public class Article {

    //ATTRIBUTES
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int iD;
    private String name;
    @OneToOne(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    private ArticleSection articleSection;
    private String footer;


    //CONSTRUCTORS

    public Article() {
    }

    public Article(String name, String footer) {
        this.name = name;
        this.footer = footer;
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
    public ArticleSection getArticleSection() {
        return articleSection;
    }
    public void setArticleSection(ArticleSection articleSection) {
        this.articleSection = articleSection;
    }
    public String getFooter() {
        return footer;
    }
    public void setFooter(String footer) {
        this.footer = footer;
    }


    //OVERRIDE


    @Override
    public String toString() {
        return "Article{" +
                "ID=" + iD +
                ", name='" + name + '\'' +
                ", footer='" + footer + '\'' +
                '}';
    }
}
