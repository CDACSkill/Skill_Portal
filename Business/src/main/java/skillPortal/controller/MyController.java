package skillPortal.controller;


import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import skillPortal.model.Auth_user;
import skillPortal.model.Avail_Certificates;
import skillPortal.model.Avail_Training;
import skillPortal.model.Employee_Skill;
import skillPortal.model.Enroll_Training;
import skillPortal.model.My_Certificates;
import skillPortal.service.LoginService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class MyController {
	Auth_user status;
	String flag;
	@Autowired
	private LoginService loginservice;
	
	@RequestMapping(value="/Login" ,method=RequestMethod.POST)
	public Auth_user login(@RequestBody Auth_user user)
	{ 
		
		status = loginservice.userLogin(user);
		return status;
		
	}
	
	@RequestMapping(value="/LoginAuth" ,method=RequestMethod.POST)
	public int loginUser(@RequestBody Auth_user user)
	{ int count;
		
		count = loginservice.register(user);
		return count;
		
	}
	@RequestMapping("/get_skills")
	public List<Employee_Skill> getAvailSkills() 
	{
		return loginservice.getAllSkills();
		
	}
	
	@RequestMapping("/get_availcerti")
	public List<Avail_Certificates> getAvailCertificate() 
	{
		return loginservice.getAllCertificates();
		
	}
	
	@RequestMapping("/get_availtraining")
	public List<Avail_Training> getAvailTraining() 
	{
		return loginservice.getAllTrainings();
		
	}
	
	
	
	@RequestMapping(value="/insert_skill" , method=RequestMethod.POST)
	public Employee_Skill insert(@RequestBody Employee_Skill s)
	{
		
		s.setUser(status);
		Employee_Skill skill = loginservice.addSkill(s);
	    return skill;
	}
	
	
	
	@RequestMapping(value="/update_rating" , method=RequestMethod.POST)
	public Employee_Skill update(@RequestBody Employee_Skill s)
	{
		s.setUser(status);
		Employee_Skill rating = loginservice.updateRating(s);
				return rating;
	}
	
	@RequestMapping("/getMyCerti")
	public List<My_Certificates> getMyCertificate() 
	{
		//System.out.println(this.status.getUserid());
		return loginservice.getmyCertificates(this.status.getUserid());
	}
	
	@RequestMapping("/getEnTraining")
	public List<Enroll_Training> getEnTraining() 
	{
		//System.out.println(this.status.getUserid());
		return loginservice.getenrolltraining(this.status.getUserid());
	}
	
	
	@RequestMapping("/addInMyCerti")
	public int addInMyCerti(@RequestParam("certi_name") String mycerti) 
	{
		System.out.println("mycerti is available");
		//System.out.println(this.status.getUserid());
		return loginservice.getAddInMyCerti(mycerti,status);
	
	}
	
	@RequestMapping("/addInMyTrain")
	public int addInMyTrain(@RequestParam("training_name") String myTrain) 
	{
//		System.out.println("mycerti is available");
		//System.out.println(this.status.getUserid());
		return loginservice.getAddInMyTrain(myTrain,status);
	
	}
	
	@RequestMapping(value="/delInMyTrain",method=RequestMethod.POST)
	public int delInTrain(@RequestBody Enroll_Training myTrain) 
	{

		myTrain.setUser(status);
		return loginservice.deleteTrain(myTrain);
	
	}
	
	
	
//	@RequestMapping(value="/addcerti", method=RequestMethod.POST)
//	public My_Certificates insert(@RequestBody My_Certificates s)
//	{
//		
//		s.setUser(status); 
//		My_Certificates certi = loginservice.addCerti(s);
//
//		return null;
//	}
	
	
		
}
