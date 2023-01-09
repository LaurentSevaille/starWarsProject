package teamStarWars.starWarsProject.repositories;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;
import teamStarWars.starWarsProject.beans.User;

public interface UserRepositoryInterface extends JpaRepositoryImplementation <User, Integer> {

    User findById(int id);
    User findByUsername(int username);

}
