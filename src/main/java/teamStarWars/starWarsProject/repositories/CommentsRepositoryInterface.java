package teamStarWars.starWarsProject.repositories;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;
import teamStarWars.starWarsProject.beans.Comment;

public interface CommentsRepositoryInterface extends JpaRepositoryImplementation <Comment, Integer> {

    Comment findById(int id);

}
