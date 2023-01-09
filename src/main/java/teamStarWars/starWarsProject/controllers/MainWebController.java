package teamStarWars.starWarsProject.controllers;


import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import teamStarWars.starWarsProject.beans.*;
import teamStarWars.starWarsProject.repositories.*;

import java.util.List;

@RestController
@RequestMapping("/API")


public class MainWebController {

    @Autowired
    private CommentsRepositoryInterface commentsRepositoryInterface;
    @Autowired
    private ArticleRepositoryInterface articleRepositoryInterface;



    @GetMapping("/addComment/{articleName}")
    public String addcomments(@RequestBody Comment comment, @PathVariable("articleName") String articleName) {

        Article article = articleRepositoryInterface.findByName(articleName);
        article.addCommentToArticle(comment);
        articleRepositoryInterface.save(article);
        System.out.println(article);
        return "OK";
    }


    @PostMapping("/addArticle")
    public String addArticle(@RequestBody Article article) {
        articleRepositoryInterface.save(article);
        System.out.println(article);
        return "OK";
    }

    @GetMapping("/viewArticle/{articleName}")
    public String viewArticle(@PathVariable("articleName") String articleName){
        Article article = articleRepositoryInterface.findByName(articleName);
        String content = article.getContent();
        return content;
    }

    @GetMapping("/viewComment/{articleName}")
    public List<Comment> viewcomment(@PathVariable("articleName") String articleName){
        List<Comment> comment = articleRepositoryInterface.findByName(articleName).getCommentList();
        return comment;
    }
/*
    @PostMapping("/addComments/{articleName}")
    public String addComment(@RequestBody Comment comment, @PathVariable("articleName") String articleName){
        Comment comment = commentsRepositoryInterface.findById(1);

        String name = comment.getAuthor();
        String content = comment.getContent();

        return content;
    }
*/
}
