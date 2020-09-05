import React from 'react';
import './SuggestPanel.css';
import SuggestItem from './SuggestItem';
import avatar from './icon/girl.jpg';

function SuggestPanel() {
  return (
    <div className="suggestPanel">
      <div className="suggestPanel__header">
        <p>Gợi ý cho bạn</p>
        <a href="#">Xem tất cả</a>
      </div>
      <SuggestItem avt={avatar} name="Quỳnh Anh"/>
      <SuggestItem avt={avatar} name="Quỳnh Anh"/>
      <SuggestItem avt={avatar} name="Quỳnh Anh"/>
    </div>
  )
}

export default SuggestPanel
