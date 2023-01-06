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

    @PostMapping("/addcomments")
    public String addcomments(@RequestBody Comments comment) {
        commentsRepositoryInterface.save(comment);
        return "OK";
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
