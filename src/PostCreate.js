import React from 'react';
import './PostCreate.css';
import pictureIcon from './icon/picture.svg';
import friendIcon from './icon/friend.svg';
import emotionIcon from './icon/emoji.svg';
import moreIcon from './icon/more.svg';
import PostCreateItem from './PostCreateItem';

function PostCreate({name, avt}) {
  return (
    <div className="postCreate">
      <div className="postCreate__title">
        Tạo bài viết
      </div>
      <div className="postCreate__input">
        <img src={avt}/>
        <input type="text" placeholder={`${name} ơi, đang nghĩ gì thế?`}/>
      </div>
      <div className="postCreate__footer">
        <PostCreateItem icon={pictureIcon} title="Ảnh/Video"/>
        <PostCreateItem icon={friendIcon} title="Gắn thẻ bạn bè"/>
        <PostCreateItem icon={emotionIcon} title="Cảm xúc/..."/>
        <PostCreateItem icon={moreIcon}/>
      </div>
    </div>
  )
}

export default PostCreate
