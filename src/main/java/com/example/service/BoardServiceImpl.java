package com.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.dao.BoardDAO;
import com.example.domain.BoardVO;

@Service
public class BoardServiceImpl implements BoardService{

    @Autowired
    private BoardDAO boardDAO;
    
    @Override
    public List<BoardVO> getBoardList() {
        return boardDAO.getBoardList();
//        List<BoardVO> list = boardDAO.getBoardList();
//        return list;
    }
    public BoardVO getBoard() {
    	return boardDAO.getBoard();
    }
}