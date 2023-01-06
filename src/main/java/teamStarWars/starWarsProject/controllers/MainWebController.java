package teamStarWars.starWarsProject.controllers;


import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import teamStarWars.starWarsProject.beans.*;
import teamStarWars.starWarsProject.repositories.*;

import java.util.*;

@RestController
@RequestMapping("/API")


public class MainWebController {

    @Autowired
    private CommentsRepositoryInterface commentsRepositoryInterface;
    @Autowired
    private ArticleRepositoryInterface articleRepositoryInterface;
    @Autowired
    private ArticleSectionRepositoryInterface articleSectionRepositoryInterface;

//POST

    @PostMapping("/addcomments")
    public String addcomments(@RequestBody Comments comment) {
        commentsRepositoryInterface.save(comment);
        return "OK";
    }
    @PostMapping("/addArticle")
    public String addArticle(@RequestBody Article article) {
        articleRepositoryInterface.save(article);
        return "OK";
    }

    @GetMapping("/addArticleSection")
    public String addArticleSection(){
        Article article = new Article("nouvel article avec contenu", "nouveau footer");
        ArticleSection articleSection = new ArticleSection("p", "contenu de la section de l'article");
        article.setArticleSection(articleSection);
        articleRepositoryInterface.save(article);
        System.out.println(article);
        return "OK";
    }


//GET

    @GetMapping("/AddArticle")
    public String addArticle(){
        Article article = new Article("nom de l'article", "footer de l'article");
        articleRepositoryInterface.save(article);
        return "OK";
    }

    @GetMapping("/viewArticle")
    public List<Article> viewArticle(){
        return articleRepositoryInterface.findAll();
    }

    @GetMapping("/viewcomments")
    public String comments() {
        Comments comment = commentsRepositoryInterface.findById(1);

        String content = comment.getContent();
        String name = comment.getName();
        String author = comment.getAuthor();
        String balise = comment.getBalise();
        String newHtmlLine = "";
        newHtmlLine += "<" + balise + ">" + author + "</" + balise + ">" +
                "<" + balise + ">" + name + "</" + balise + ">" +
                "<" + balise + ">" + content + "</" + balise + ">";

        return newHtmlLine;

    }

}
