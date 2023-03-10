package teamStarWars.starWarsProject.repositories;

import org.springframework.data.jpa.repository.support.JpaRepositoryImplementation;
import teamStarWars.starWarsProject.beans.User;

public interface UserRepositoryInterface extends JpaRepositoryImplementation <User, Integer> {

    User findById(int id);
    User findByUsername(String username);
    User findFirstByUsername(String username);
    User findByAddress(String Address);
    int countByAddress(String Address);
    int countByUsername(String username);
}
