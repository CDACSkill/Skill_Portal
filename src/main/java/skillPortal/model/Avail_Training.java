package skillPortal.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Avail_Training {

	@Id
	private String training_name;
	private String date;
	
	public Avail_Training() {

	}
	
	public Avail_Training(String training_name, String date) {
		this.training_name = training_name;
		this.date = date;
	}


	public String getDate() {
		return date;
	}

	public String getTraining_name() {
		return training_name;
	}

	public void setTraining_name(String training_name) {
		this.training_name = training_name;
	}

	public void setDate(String date) {
		this.date = date;
	}
	
	
}
