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
    private UserRepositoryInterface userRepositoryInterface;



    @PostMapping("/addArticle")
    public String addArticle(@RequestBody Article article) {
        articleRepositoryInterface.save(article);
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
        List<Comment> comments = articleRepositoryInterface.findByName(articleName).getCommentList();
        return comments;
    }
/*
    @PostMapping("/addComment")
    public String addComment(@RequestBody Comment comment) {
        commentsRepositoryInterface.save(comment);
        return "OK";
    }
*/
    @PostMapping("/addComment/{articleName}")
    public String addComment(@PathVariable("articleName")String articleName, @RequestBody Comment comment) {
        Article article = articleRepositoryInterface.findByName(articleName);
        article.addCommentToArticle(comment);
        articleRepositoryInterface.save(article);
        return "Thank you for your comment!";
    }

    @PostMapping("/getSessionValues/{username}/{password}")
    public User getSessionValues(@PathVariable("username") String username, @PathVariable("password") String password)
    {
        User user = userRepositoryInterface.findByUsername(username);
        return user;
    }


}
