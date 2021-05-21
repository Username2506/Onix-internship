import './css/Image.css';
import React from 'react';
import img from '../../assets/image.png';

const Image = () => (
  <div>
    <img 
      src={img}
      alt="alt"
      onLoad={() => alert('Изображение успешно загружено')}
      onError={() => alert('Ошибка при загрузке изображения')}
    />
  </div>
);

export default Image;
