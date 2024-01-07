package com.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.MemberDAO;
import com.example.domain.MemberVO;

@Service // 이 클래스가 Spring에서 Service 역할을 하는 클래스임
public class MemberServiceImpl implements MemberService {
	
	@Autowired //BoardDAO 타입의 객체를 자동으로 주입 / Spring의 의존성 주입(Dependency Injection)을 사용하는 부
	private MemberDAO memberDAO;
	
	

    @Override // Java에서 메서드 재정의를 나타내는 어노테이션 , 부모 클래스나 인터페이스의 메서드를 재정의
    public MemberVO login(MemberVO vo) { 
        return memberDAO.login(vo);
    }
	
    @Override
    public void insertMember(MemberVO vo) {
    	memberDAO.insertMember(vo);
		
	}
    @Override
    public void deleteMember(String id) {
        memberDAO.deleteMemberById(id);
    }
    
    @Override
    public void updateMember(MemberVO vo) {
    	memberDAO.updateMember(vo);
    }


    
}