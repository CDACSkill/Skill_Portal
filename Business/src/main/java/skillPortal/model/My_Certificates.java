package skillPortal.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import org.hibernate.mapping.List;

@Entity
public class My_Certificates {
    
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int certi_id;
	private String certi_name;
	private String institution;

	
	@ManyToOne
	private Auth_user user;

	
	public My_Certificates() {
	
	}


	
	public My_Certificates(String certi_name, String institution) {
	super();
	
	this.certi_name = certi_name;
	this.institution = institution;
}



	
	public Auth_user getUser() {
		return user;
	}

	public void setUser(Auth_user user) {
		this.user = user;
	}



	public String getCerti_name() {
		return certi_name;
	}


	public void setCerti_name(String certi_name) {
		this.certi_name = certi_name;
	}


	
	public String getInstitution() {
		return institution;
	}

	public void setInstitution(String institution) {
		this.institution = institution;
	}

	
}
