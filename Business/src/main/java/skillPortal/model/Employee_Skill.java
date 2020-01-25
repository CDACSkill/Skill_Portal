package skillPortal.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Employee_Skill {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int employee_skill_id;
	private String skill_name;

	private String skill_group;
	private String rating;
	


	@ManyToOne
	private Auth_user user;


	public Employee_Skill() {
		
	}

	public Employee_Skill(String skill_name, String skill_group, String rating) {
		
		this.skill_name = skill_name;
		this.skill_group = skill_group;
		this.rating = rating;
	}

	
	public String getSkill_name() {
		return skill_name;
	}

	public void setSkill_name(String skill_name) {
		this.skill_name = skill_name;
	}

	

	public Auth_user getUser() {
		return user;
	}

	public void setUser(Auth_user user) {
		this.user = user;
	}


	public String getSkill_group() {
		return skill_group;
	}

	public void setSkill_group(String skill_group) {
		this.skill_group = skill_group;
	}

	public String getRating() {
		return rating;
	}

	public void setRating(String rating) {
		this.rating = rating;
	}
	
	
}
