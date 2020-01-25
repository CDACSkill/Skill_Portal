package skillPortal.repository;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import skillPortal.model.Enroll_Training;

@Repository
@Transactional
public interface Enroll_TrainingRepo extends JpaRepository<Enroll_Training,String>{

	@Query(value="SELECT * FROM enroll_training WHERE user_userid = :userid",nativeQuery=true)
	List<Enroll_Training> findAllTrain(String userid);
//
	@Modifying
	@Query(value="DELETE FROM enroll_training WHERE training_name = :training_name AND user_userid = :userid",nativeQuery=true)
	void deleteByname(String training_name,String userid);
	
	@Query(value="SELECT * FROM enroll_training WHERE training_name=:training_name AND user_userid = :userid",nativeQuery=true)
      Optional<Enroll_Training> existbyName(String training_name, String userid);

	

}
