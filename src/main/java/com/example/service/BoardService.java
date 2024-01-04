package com.example.service;

import com.example.domain.BoardVO;

import java.util.List;

public interface BoardService {
	
	// 글 리스트 조회
    List<BoardVO> getBoardList();
    
    // 글 상세조회
    BoardVO getBoard();
}