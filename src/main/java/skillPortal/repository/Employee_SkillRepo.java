package skillPortal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import skillPortal.model.Auth_user;
import skillPortal.model.Employee_Skill;

@Repository
public interface Employee_SkillRepo extends JpaRepository<Employee_Skill,String> {

}
