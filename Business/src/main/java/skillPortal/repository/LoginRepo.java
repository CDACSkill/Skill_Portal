package skillPortal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import skillPortal.model.Auth_user;

@Repository
public	interface LoginRepo extends JpaRepository<Auth_user,String>{


}
