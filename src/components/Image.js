import "./Image.css"
import img from '../assets/image.png';

function Image() {
    return (
        <div>
            <img src = {img}
            alt = ""
            onLoad = {() => alert("Изображение успешно загружено")}
            onError = {() => alert("Ошибка при загрузке изображения")}
            />
        </div>
    );
}

export default Image;