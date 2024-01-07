package com.example.domain;

import java.sql.Date;

import lombok.Data;

@Data
public class MemberVO {
    private String user_id;
	private String user_pass;
	private String user_name;
    private Date user_birth;
	private String user_tel;

	

    /**
     * @return String return the user_id
     */
    public String getUser_id() {
        return user_id;
    }

    /**
     * @param user_id the user_id to set
     */
    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    /**
     * @return String return the user_pass
     */
    public String getUser_pass() {
        return user_pass;
    }

    /**
     * @param user_pass the user_pass to set
     */
    public void setUser_pass(String user_pass) {
        this.user_pass = user_pass;
    }

    /**
     * @return String return the user_name
     */
    public String getUser_name() {
        return user_name;
    }

    /**
     * @param user_name the user_name to set
     */
    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    /**
     * @return Date return the user_birth
     */
    public Date getUser_birth() {
        return user_birth;
    }

    /**
     * @param user_birth the user_birth to set
     */
    public void setUser_birth(Date user_birth) {
        this.user_birth = user_birth;
    }

    /**
     * @return String return the user_tel
     */
    public String getUser_tel() {
        return user_tel;
    }

    /**
     * @param user_tel the user_tel to set
     */
    public void setUser_tel(String user_tel) {
        this.user_tel = user_tel;
    }

}
