import React from 'react';
import subjectlist from './subjectlist';
import Subject from './Subject';
import './App.css';

function App(){
  return(
    <section className = 'container'>
      {/* header */}
      <div className='header'>
        <div className='helper' />
        <img src='images/logo.gif' alt='logo' />
      </div>
      <div className='mainbanner'>
        <div className='bannerWidth'>
          <div className='bannerCenter'>
            <div class='info'>
              <div class="info_text"><b>" 진짜 사고력 학습 "</b></div> 
              <div class="info_text">학년이 올라갈수록</div>
              <div class="info_text">힘이 생기는 진짜 사고력 학습</div>
            </div>
            <img src='images/index_img20.png' alt='mainBanner' />
          </div>
        </div>
      </div>
           
      {/* subject list */}
      <div className = 'subtitle'> <b>재능스스로 과목</b> 
      내 아이 처음 공부, 선택이 중요합니다.</div>
      <div className = 'subjects'>
        {subjectlist.map(subject => (
          <Subject 
            key = {subject.id}
            name = {subject.subject_name}
            image = {subject.image}
            code = {subject.grade_code}
            member = {subject.member}
            stock = {subject.stock}
            desc = {subject.subject_name}
          />
        ))
      } 
      </div> 
      
      {/* footer */ }
      <div class='footer'>
          <div class='footer_'>
            <img src='images/logo.gif' /><div class='footer_info'>
              <p><span>대표자: 박종우</span>주소: 서울특별시 종로구 창경궁로 293(주)재능교육</p>
              <p><span>사업자번호: 204-81-03990</span><span>전화: 1588-1132</span>이메일: answer@jei.com</p>
              <p>Copyright © JEI corporation. All rights reserved.</p>
            </div>
          </div>
      </div>
    </section>
  );
}

export default App;