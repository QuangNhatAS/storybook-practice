import React from 'react';
import './PostCreateItem.css';

function PostCreateItem({icon, title}) {
  return (
    <div className="postCreateItem">
      <img src={icon} alt="" width={25}/>
      <p>{title}</p>
    </div>
  )
}

export default PostCreateItem
