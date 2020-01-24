package skillPortal.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Avail_Certificates {

	@Id
	private String certi_name;
	private String institution;
	
	
	
	public Avail_Certificates() {
		
	}

	public Avail_Certificates(String certi_name, String institution) {
		this.certi_name = certi_name;
		this.institution = institution;
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
