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

    @PostMapping("/registerUser/{username}/{password}/{address}")
    public String registerUser(@PathVariable("username") String username, @PathVariable("password") String password, @PathVariable("address") String address)
    {
        User user = new User(username,password,address,3);
        userRepositoryInterface.save(user);

        try
        {
            userRepositoryInterface.save(user);
            return "OK";
        }
        catch(Exception e ){
            System.out.println("Erreur d'index");
            return "not OK";
        }
    }

    @PostMapping("/existAddress/{address}")
    public String existAddress(@PathVariable("address") String address)
    {

        if(userRepositoryInterface.countByAddress(address)>=1)
            return "exist";
        else
            return "OK";
    }

    @PostMapping("/existUser/{username}")
    public String existUser(@PathVariable("username") String username)
    {

        if(userRepositoryInterface.countByUsername(username)>=1)
            return "exist";
        else
            return "OK";
    }
}
