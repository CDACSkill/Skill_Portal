package skillPortal.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.stereotype.Service;

import skillPortal.model.My_Certificates;
import skillPortal.model.Auth_user;
import skillPortal.model.Avail_Certificates;
import skillPortal.model.Avail_Training;
import skillPortal.model.Employee_Skill;
import skillPortal.model.Enroll_Training;
import skillPortal.repository.Avail_CertiRepo;
import skillPortal.repository.Avail_TrainingRepo;
import skillPortal.repository.Employee_SkillRepo;
import skillPortal.repository.Enroll_TrainingRepo;
import skillPortal.repository.LoginRepo;
import skillPortal.repository.My_CertificateRepo;

@Service
public class LoginService {
	String flag;
	@Autowired
	private LoginRepo repo;
	
	@Autowired
	private Avail_CertiRepo cetrepo;
	
	@Autowired
	private Avail_TrainingRepo trarepo;
	
	@Autowired
	private Employee_SkillRepo skillrepo;
	
	@Autowired
	private My_CertificateRepo certi;
	
	@Autowired
	private Enroll_TrainingRepo enrepo;
	
	public Auth_user userLogin(Auth_user user) 
	{
		Optional<Auth_user> x = repo.findById(user.getUserid());
		
		 
		 return user;
		 
	
	}

	public List<Avail_Certificates> getAllCertificates() {
		// TODO Auto-generated method stub
		return cetrepo.findAll();
	}
	
	public List<Avail_Training> getAllTrainings() {
		// TODO Auto-generated method stub
		return trarepo.findAll();
	}

	

	public Employee_Skill addSkill(Employee_Skill s) {
			return skillrepo.save(s);
	}

	public My_Certificates addCerti(My_Certificates s) {
		// TODO Auto-generated method stub
		
		return certi.save(s);
	}

	public List<My_Certificates> getmyCertificates(String s) {
		// TODO Auto-generated method stub
		
		return certi.findAllcerti(s);
	}


	public List<Enroll_Training> getenrolltraining(String s) {
		// TODO Auto-generated method stub
		return enrepo.findAllTrain(s);
	}

	public Employee_Skill updateRating(Employee_Skill s) {
		// TODO Auto-generated method stub
		
			skillrepo.save(s); //change of failing is almost zero.
			
			return s;
	}
	
	public Enroll_Training addTrain(Enroll_Training s) {
		// TODO Auto-generated method stub
		
		return enrepo.save(s);
	}



	public String getAddInMyCerti(String mycerti,Auth_user status) {
		// TODO Auto-generated method stub
		My_Certificates addnew =new My_Certificates();
		Optional<Avail_Certificates> x = cetrepo.findById(mycerti);
		
			addnew.setCerti_name(x.get().getCerti_name());
			addnew.setInstitution(x.get().getInstitution());
			addnew.setUser(status);
			addCerti(addnew);
			return "successfull";
		
		
	}

	public String getAddInMyTrain(String myTrain, Auth_user status) {
		// TODO Auto-generated method stub
		Enroll_Training addnew =new Enroll_Training();
		Optional<Avail_Training> x = trarepo.findById(myTrain);
		
			addnew.setTraining_name(x.get().getTraining_name());
			addnew.setDate(x.get().getDate());
			addnew.setUser(status);
			addTrain(addnew);
			return "successfull";
	}
//
//	public String delInMyTrain(int training) {
//		// TODO Auto-generated method stub
//		enrepo.deleteByname(training_name);
//		return null;
//	}

	public String register(Auth_user user) {
		// TODO Auto-generated method stub
		
		
		if(!repo.existsById(user.getUserid())){
			
			repo.save(user);
			flag = "successfully registered";
		}
	else
	{
		flag="Registration Failed";
	
		
	}
		return flag;
	}

	

	public String deleteTrain(Enroll_Training myTrain) {
		// TODO Auto-generated method stub
		String train_name=myTrain.getTraining_name();
		String userid = myTrain.getUser().getUserid();
		enrepo.deleteByname(train_name,userid);
	     System.out.println(" "+train_name+" "+userid);
//		if(enrepo.existsById(myTrain.get))
			//change of failing is almost zero.
//	else
//			System.out.println("delete failed");
	return "Deleted Successfully"; 
	}

	
	

	

//	public List<My_Certificates> getmyCertificates(My_Certificates user_userid) {
//		// TODO Auto-generated method stub
//		return certi.findAllcerti(user_userid);
//	}

	
	

//	public int addSkill(Employee_Skill s) {
//		// TODO Auto-generated method stub
//		if(obj1.existsById(n.getMn()))
//			obj1.save(n); //change of failing is almost zero.
//	else
//			System.out.println("update failed");
//	return n;
//		
//	}

//	public Employee_Skill addSkill(Employee_Skill s) {
//		// TODO Auto-generated method stub
//		skillrepo.s
//		return 
//	}
	
//	public int addNewSkill(Employee_Skill e)
//		session.createCriteria(AppDetails.class) .add(Restrictions.eq("login.loginId", loginId ));

//		return 0;
//	}

//	public Employee_Skill addSkill(Employee_Skill s) {
//		// TODO Auto-generated method stub
//		
//		return null;
//	}

	
	
//	public int insertFunction(Item e)
//	{
//		if(!obj1.existsById(e.getItemno()))
//		{
//			obj1.save(e);
//			flag = 1;
//		}	 
//		else 
//		{
//			System.out.println("Item Details Already Present. ");
//			flag = 0;
//		}
//			
//		return flag;
//	}
}
