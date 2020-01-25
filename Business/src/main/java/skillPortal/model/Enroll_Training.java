package skillPortal.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Enroll_Training {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int enroll_trainingId;
	

	private String training_name;
	private String date;
	
	

	@ManyToOne
	private Auth_user user;
	
	public Enroll_Training() {
	
	}

	

	
	public Enroll_Training(int enroll_trainingId, String training_name, String date) {
		super();
		this.enroll_trainingId = enroll_trainingId;
		this.training_name = training_name;
		this.date = date;
	}




	public int getEnroll_trainingId() {
		return enroll_trainingId;
	}
	
	public void setEnroll_trainingId(int enroll_trainingId) {
		this.enroll_trainingId = enroll_trainingId;
	}

	public Auth_user getUser() {
		return user;
	}

	public void setUser(Auth_user user) {
		this.user = user;
	}

	
	public String getTraining_name() {
		return training_name;
	}

	public void setTraining_name(String training_name) {
		this.training_name = training_name;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}
	@Override
	public String toString() {
		return "Enroll_Training [enroll_trainingId=" + enroll_trainingId + ", training_name=" + training_name
				+ ", date=" + date + ", user=" + user + "]";
	}
	
}
