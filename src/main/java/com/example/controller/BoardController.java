package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.domain.BoardVO;
import com.example.service.BoardService;

@Controller
@RequestMapping("board")
public class BoardController {
	
	@Autowired
	private BoardService boardService;
	
	// [요청] http://127.0.0.1:8080/board/xxxxxxxxxxxxxx
	@RequestMapping("/{step}")
	public String viewPage(@PathVariable String step) {
		return "/board/" + step;
	}
	
	// 글목록검색
	// [요청] http://127.0.0.1:8080/board/getBoardList
	@RequestMapping("/getBoardList")
	public void getBoardList(Model m) {
		System.out.println("board/getBoardList ----------------------- ");
		List<BoardVO> list = boardService.getBoardList();
		
		m.addAttribute("boardList",list);
	}
	
	// 글상세보기
	@RequestMapping("/getBoard")
	public void getBoard(BoardVO vo, Model m) {
		BoardVO result = boardService.getBoard();
		m.addAttribute("board", result);
	}
	
	//그냥 이동
	@RequestMapping("/lawyer")
	public void lawyer() {
		
	}

}
