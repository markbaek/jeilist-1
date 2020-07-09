import React from 'react';

function Subject({name, image, desc, code, member, stock}){
    return(
      <div className='subject'>
        <img src={image} alt={desc} />
        <h4 className='subject_name'>{name}</h4>
        <div className='subject_member'>{code} | 회원수 <b>{member}</b> | 재고  <b>{stock}</b> </div>
      </div>
    )
  }


export default Subject;
