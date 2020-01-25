package skillPortal.model;


import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;


import org.hibernate.mapping.List;


@Entity
public class Auth_user {
	
  @Id
  private String userid;
  private String password;
  
//  @ManyToMany(targetEntity = My_Certificates.class)
//  private List mycerti;
//  
//  @OneToMany(mappedBy="authuser1")
//  private List<My_Certificates> mycerti;
//  
//  @OneToMany(mappedBy="authuser3")
//  private List<Employee_Skill> myskill;
//  
//  @OneToMany(mappedBy="authuser2")
//  private List<Enroll_Training> mytrainings;


// private Set<My_Certificates> myCertificate;
    public Auth_user() {
	System.out.println("Auth is created");
	
}



public Auth_user(String userid, String password) {
	this.userid = userid;
	this.password = password;
}

public String getUserid() {
	return userid;
}

public void setUserid(String userid) {
	this.userid = userid;
}

public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
}

@Override
public String toString() {
	return "Auth_user [userid=" + userid + ", password=" + password + "]";
}
	
}
