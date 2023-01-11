package teamStarWars.starWarsProject.repositories;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;
import teamStarWars.starWarsProject.beans.Article;

import java.util.List;

public interface ArticleRepositoryInterface extends JpaRepositoryImplementation<Article, Integer> {

    Article findById(int id);
    Article findByName(String name);
    List<Article> findByNameLike(String likePattern);



}
