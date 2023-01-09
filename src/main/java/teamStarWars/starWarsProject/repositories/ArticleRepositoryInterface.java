package teamStarWars.starWarsProject.repositories;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;
import teamStarWars.starWarsProject.beans.Article;

public interface ArticleRepositoryInterface extends JpaRepositoryImplementation<Article, Integer> {

    Article findById(int id);
    Article findByName(String name);
    Article findByNameLike(String likePattern);



}
