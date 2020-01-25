package skillPortal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import skillPortal.model.Avail_Certificates;

@Repository
public interface Avail_CertiRepo extends JpaRepository<Avail_Certificates,String> {

}
