import React from 'react';
import './SuggestItem.css';

function SuggestItem({avt, name}) {
  return (
    <div className="suggestItem">
      <div className="suggestItem__info">
        <img src={avt}/> 
        <div className="suggestItem__title">
          <p className="suggestItem__name">{name}</p>
          <p className="suggestItem__default">Gợi ý cho bạn</p>
        </div>
      </div>
      <a href="#">Theo dõi</a>
    </div>
  )
}

export default SuggestItem
