package skillPortal.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import skillPortal.model.Avail_Training;

@Repository
public interface Avail_TrainingRepo extends JpaRepository<Avail_Training,String> {

}
