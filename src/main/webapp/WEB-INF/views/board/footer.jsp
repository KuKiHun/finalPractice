<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <style>
    
    </style>
</head>
<body>
    <h2>안녕난 사장이야</h2>
    <h2>안녕난 신입이야</h2>
<!--  footer  -->
<!--  top scroll button  -->
<!--  popup login, sign up  -->

        <!-- FOOTER START -->
        <footer class="footer-dark" style="background-image: url(images/f-bg.jpg); padding-top:0px;">
            <div class="container">

                <!-- FOOTER BLOCKES START -->  
                <div class="footer-top">
                    <div class="row">

                        <div class="col-lg-3 col-md-12">
                            
                            <div class="widget widget_about">
                                <div class="logo-footer clearfix">
                                    <a href="index.html"><img src="${pageContext.request.contextPath}/images/logo-light.png" alt=""></a>
                                </div>
                                <ul class="ftr-list">
                                    <li><p><span>주소 :</span>서울특별시 마포구 백범로 23</p></li>
                                    <li><p><span>이메일 :</span>admin@FolLaw.com</p></li>
                                    <li><p><span>문의 :</span>010-2538-1830</p></li>
                                </ul>
                            </div>                            
                            
                        </div> 

                        <div class="col-lg-9 col-md-12">
                            <div class="row">
                               
                                <div class="col-lg-3 col-md-6 col-sm-6">
                                    <div class="widget widget_services ftr-list-center">
                                        <h3 class="widget-title">메뉴</h3>
                                        <ul>
                                            <li><a href="">메뉴1</a></li>
                                            <li><a href="">메뉴2</a></li>
                                            <li><a href="">메뉴3</a></li>
                                        </ul>
                                    </div>
                                </div>
                            
                                <div class="col-lg-3 col-md-6 col-sm-6">
                                    <div class="widget widget_services ftr-list-center">
                                        <h3 class="widget-title">메뉴</h3>
                                        <ul>
                                            <li><a href="">메뉴1</a></li>
                                            <li><a href="">메뉴2</a></li>
                                            <li><a href="">메뉴3</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-md-6 col-sm-6">
                                    <div class="widget widget_services ftr-list-center">
                                        <h3 class="widget-title">메뉴</h3>
                                        <ul>
                                            <li><a href="">메뉴1</a></li>
                                            <li><a href="">메뉴2</a></li>
                                            <li><a href="">메뉴3</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-md-6 col-sm-6">  
                                    <div class="widget widget_services ftr-list-center">
                                        <h3 class="widget-title">메뉴</h3>
                                        <ul>
                                            <li><a href="">메뉴1</a></li>
                                            <li><a href="">메뉴2</a></li>
                                            <li><a href="">메뉴3</a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>  

                        </div> 

                    </div>
                </div>
                <!-- FOOTER COPYRIGHT -->
                <div class="footer-bottom">
                
                    <div class="footer-bottom-info">
                    
                        <div class="footer-copy-right">
                            <span class="copyrights-text">Copyright © 2023 by FolLaw All Rights Reserved.</span>
                        </div>
                        <ul class="social-icons">
                            <li><a href="javascript:void(0);" class="fab fa-facebook-f"></a></li>
                            <li><a href="javascript:void(0);" class="fab fa-twitter"></a></li>
                            <li><a href="javascript:void(0);" class="fab fa-instagram"></a></li>
                            <li><a href="javascript:void(0);" class="fab fa-youtube"></a></li>
                        </ul>
                        
                    </div>
                    
                </div>

            </div>
    
        </footer>
        <!-- FOOTER END -->

        <!-- BUTTON TOP START -->
		<button class="scroltop"><span class="fa fa-angle-up  relative" id="btn-vibrate"></span></button>

        <!--Model Popup Section Start-->
    
            <!--회원가입 팝업 -->
            <div class="modal fade twm-sign-up" id="sign_up_popup" aria-hidden="true" aria-labelledby="sign_up_popupLabel" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <form>

                            <div class="modal-header">
                                <h2 class="modal-title" id="sign_up_popupLabel">회원가입</h2>
                                <p>FolLaw에 오신 것을 환영합니다.</p>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div class="modal-body">
                                <div class="twm-tabs-style-2">
                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    
                                    </ul>
                                    <div class="tab-content" id="myTabContent">
                                    <!--Signup Candidate Content-->  
                                    <div class="tab-pane fade show active" id="sign-candidate">
                                        <div class="row">

                                            <div class="col-lg-12">
                                                <div class="form-group mb-3">
                                                    아이디
                                                    <input name="username" type="text" required="" class="form-control">
                                                </div>
                                            </div>
                                            
                                            <div class="col-lg-12">
                                                <div class="form-group mb-3">
                                                    비밀번호
                                                    <input name="password" type="password" class="form-control" required="">
                                                </div>
                                            </div>
                                            
                                            <div class="col-lg-12">
                                                <div class="form-group mb-3">
                                                    생년월일
                                                    <input name="birthdate" type="date" class="form-control" required="">
                                                </div>
                                            </div>
            
                                            <div class="col-lg-12">
                                                <div class="form-group mb-3">
                                                    전화번호
                                                    <input name="tel" type="text" class="form-control" required="">
                                                </div>
                                            </div>
                                            
                                            <div class="col-lg-12">
                                                <div class="form-group mb-3">
                                                    <div class=" form-check">
                                                        <input type="checkbox" class="form-check-input" id="agree1">
                                                        <label class="form-check-label" for="agree1"><a href="javascript:;" data-bs-toggle="modal" data-bs-target="#user_agreement" data-bs-dismiss="modal">이용약관</a>에 모두 동의합니다.</label>
                                                        <p>이미 회원이신가요?
                                                            <button class="twm-backto-login" data-bs-target="#sign_up_popup2" data-bs-toggle="modal" data-bs-dismiss="modal">로그인</button>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <button type="submit" class="site-button">가입완료</button>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    
                                    </div>
                                </div> 
                            </div>

                            <div class="modal-footer">
                                <span class="modal-f-title">SNS연동 회원가입</span>
                                <ul class="twm-modal-social">
                                    <li><a href="javascript" class="facebook-clr"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="javascript" class="twitter-clr"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="javascript" class="linkedin-clr"><i class="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="javascript" class="google-clr"><i class="fab fa-google"></i></a></li>
                                </ul>
                            </div>

                        </form>
                    </div>
                </div>
                
            </div>
    <!--이용약관-->
                <div class="modal fade twm-sign-up" id="user_agreement" aria-hidden="true" aria-labelledby="sign_up_popupLabel" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">

                            <div class="modal-header">
                                <h2 class="modal-title" id="sign_up_popupLabel">이용약관</h2>
                                <p>서비스 이용약관 및 개인정보 동의 약관</p>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div class="modal-body">
                                <div class="twm-tabs-style-2">
                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    
                                    </ul>
                                    <div class="tab-content" id="myTabContent">
                                    <!--Signup Candidate Content-->  
                                    <div class="tab-pane fade show active" id="sign-candidate">
                                        <div class="row">

                                            <div class="col-lg-12">
                                                <div class="form-group mb-3">
                                                    서비스 이용약관
                                                    <input name="useragreement" type="text" required="" 
                                                           value="제1조 (목적) 본 약관은 주식회사 팔로우(이하 ‘회사’라 합니다)이 제공하는 서비스를 이용함에 있어 회사와 회원 간의 권리와 의무 및 기타 필요한 사항을 규정함을 목적으로 합니다." 
                                                           class="form-control" readonly>
                                                    <br/>
                                                    개인정보 이용약관
                                                    <input name="useragreement" type="text" required="" 
                                                           value="제1조 (목적) 본 약관은 주식회사 팔로우(이하 ‘회사’라 합니다)이 제공하는 서비스를 이용함에 있어 회사와 회원 간의 권리와 의무 및 기타 필요한 사항을 규정함을 목적으로 합니다." 
                                                           class="form-control" readonly>
                                                </div>
                                            </div>
                                            
                                            <div class="col-md-12">
                                                <button class="site-button" data-bs-target="#sign_up_popup" data-bs-toggle="modal" data-bs-dismiss="modal">확인</button>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    
                                    </div>
                                </div> 
                            </div>

                    </div>
                </div>
                
            </div>
            <!--로그인팝업 -->
            <div class="modal fade twm-sign-up" id="sign_up_popup2" aria-hidden="true" aria-labelledby="sign_up_popupLabel2" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    
                        <form>
                            <div class="modal-header">
                                <h2 class="modal-title" id="sign_up_popupLabel2">로그인</h2>
                                <p>FolLaw에 오신 것을 환영합니다.</p>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="twm-tabs-style-2">
                                    <ul class="nav nav-tabs" id="myTab2" role="tablist">

                                        <!--일반회원-->  
                                        <li class="nav-item">
                                            <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#login-candidate" type="button"><i class="fas fa-user-tie"></i>일반회원</button>
                                        </li>
                                        <!--변호사회원-->
                                        <li class="nav-item">
                                            <button class="nav-link" data-bs-toggle="tab" data-bs-target="#login-Employer" type="button"><i class="fas fa-building"></i>변호사회원</button>
                                        </li>
                                    
                                    </ul>
                                    
                                    <div class="tab-content" id="myTab2Content">
                                        <!--일반회원 로그인-->  
                                        <div class="tab-pane fade show active" id="login-candidate">
                                            <div class="row">

                                                <div class="col-lg-12">
                                                    <div class="form-group mb-3">
                                                        <input name="username" type="text" required="" class="form-control" placeholder="아이디">
                                                    </div>
                                                </div>
                                                
                                                <div class="col-lg-12">
                                                    <div class="form-group mb-3">
                                                        <input name="password" type="password" class="form-control" required="" placeholder="비밀번호">
                                                    </div>
                                                </div>
                                                
                                                
                                                <div class="col-lg-12">
                                                    <div class="form-group mb-3">
                                                        <div class=" form-check">
                                                            <input type="checkbox" class="form-check-input" id="Password3">
                                                            <label class="form-check-label rem-forgot" for="Password3">아이디 저장<a href="javascript:;">비밀번호 찾기</a></label>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12">
                                                    <button type="submit" class="site-button">로그인</button>
                                                    <div class="mt-3 mb-3">아직 회원이 아니신가요? 
                                                        <button class="twm-backto-login" data-bs-target="#sign_up_popup" data-bs-toggle="modal" data-bs-dismiss="modal">회원가입</button>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        
                                        <!--변호사회원 로그인--> 
                                        <div class="tab-pane fade" id="login-Employer">
                                            <div class="row">

                                                <div class="col-lg-12">
                                                    <div class="form-group mb-3">
                                                        <input name="username" type="text" required="" class="form-control" placeholder="아이디">
                                                    </div>
                                                </div>
                                                
                                                <div class="col-lg-12">
                                                    <div class="form-group mb-3">
                                                        <input name="email" type="text" class="form-control" required="" placeholder="비밀번호">
                                                    </div>
                                                </div>
                                                
                                                
                                                <div class="col-lg-12">
                                                    <div class="form-group mb-3">
                                                        <div class=" form-check">
                                                            <input type="checkbox" class="form-check-input" id="Password4">
                                                            <label class="form-check-label rem-forgot" for="Password4">아이디 저장<a href="javascript:;">비밀번호 찾기</a></label>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <div class="col-md-12">
                                                    <button type="submit" class="site-button">로그인</button>
                                                    <div class="mt-3 mb-3">아직 회원이 아니신가요? 
                                                        <button class="twm-backto-login" data-bs-target="#sign_up_popup" data-bs-toggle="modal" data-bs-dismiss="modal">회원가입</button>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    
                                    </div>
                                </div> 
                            </div>
                            <div class="modal-footer">
                                <span class="modal-f-title">SNS연동 로그인</span>
                                <ul class="twm-modal-social">
                                    <li><a href="javascript" class="facebook-clr"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="javascript" class="twitter-clr"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="javascript" class="linkedin-clr"><i class="fab fa-linkedin-in"></i></a></li>
                                    <li><a href="javascript" class="google-clr"><i class="fab fa-google"></i></a></li>
                                </ul>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        <!--Model Popup Section End-->
    
</body>
</html>