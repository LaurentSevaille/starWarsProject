package teamStarWars.starWarsProject.repositories;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;
import teamStarWars.starWarsProject.beans.Comments;

public interface CommentsRepositoryInterface extends JpaRepositoryImplementation <Comments, Integer> {

    Comments findById(int id);

}
