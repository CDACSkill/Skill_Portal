package skillPortal.repository;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import skillPortal.model.Avail_Certificates;
import skillPortal.model.My_Certificates;

@Repository
public interface My_CertificateRepo extends JpaRepository<My_Certificates,String>{

	
	
	@Query(value="SELECT * FROM my_certificates WHERE user_userid = :userid",nativeQuery=true)
//	@Query("SELECT * FROM my_certificates WHERE user_userid = ?1")
	List<My_Certificates> findAllcerti(String userid);

	@Query(value="SELECT * FROM my_certificates WHERE certi_name=:certi_name AND user_userid = :userid",nativeQuery=true)
	Optional<My_Certificates> existbyName(String certi_name,String userid);
	
	
	
}
