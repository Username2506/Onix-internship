import logo from './logo.svg';
import './App.css';

function App() {
  const mainTitle = "Входное задание в интернатуру",
        author = "Никита Ламекин",
        gitRef = "https://github.com/Username2506",
        designRef = "https://nodejs.org/uk/docs/",
        onixRef = "https://onix.kr.ua/";
  return (
    <div>
        <header>
            <h1>
                <strong>
                    {mainTitle}
                </strong>
            </h1>
            <nav className = "anchors">
                <ul>
                    <li>
                        <a href = "#theme">
                            Тема
                        </a>
                    </li>
                    <li>
                        <a href = "#goal">
                            Цель
                        </a>
                    </li>
                    <li>
                        <a href = "#material-to-discuss">
                            Обсуждаемый материал
                        </a>
                    </li>
                    <li>
                        <a href = "#task">
                            Задание
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
        <div className = "description">
            <h2 id = "theme">
                Тема
            </h2>
            <p>
                Git, node, npm, основы html css
            </p>
            <h2 id = "goal">
                Цель
            </h2>
            <p>
                Изучить базовые функции git, node, npm. Подготовить к дальнейшей работе систему. Определить уровень умения верстки
            </p>
        </div>
        <div className = "workspace">
            <h2 id = "material-to-discuss">
                Обсуждаемый материал
            </h2>
            <ol>
                <li>
                    Что такое система контроля версий и зачем она нужна
                </li>
                <li>
                    Git
                    <ol type = "a">
                        <li>
                            Checkout, add, commit, pull, push
                        </li>
                        <li>
                            Основы ветвления и слияния
                        </li>
                    </ol>
                </li>
                <li>
                    Что такое nodejs, зачем он нужен и как устанавливать
                </li>
                <li>
                    Что такое менеджер пакетов, установка npm
                </li>
                <li>
                    Html: теги, структура html страницы, блочные и строчные элементы, списки, таблицы, атрибуты, текст, якоря, ссылки, w3c валидация
                </li>
                <li>
                    Css: стили, классы, идентификаторы, селекторы, псевдоклассы, псевдоэлементы
                </li>
            </ol>
            <h2 id = "task">
                Задание
            </h2>
            <ol>
                <li>
                    Установить git, node, npm. Создать аккаунт на <a href = "https://github.com/" target = "_blank">https://github.com/</a> и публичный репозиторий для проекта. Клонировать из репозитория проект, сделать любые изменения в нем сделать коммит и запушить изменения
                </li>
                <li>
                    Cоздать простой шаблон страницы для дальнейшей работы. Страница должна содержать хедер, футер, блок с коротким описанием проекта и элементы из раздела “Обсуждаемый материал этого урока”(хотя бы по одному примеру). На странице должны быть: имя и фамилия автора, ссылка на github аккаунт, ссылка на оригинал дизайна. Страница должна проходить валидацию на w3c.
                </li>
            </ol>
        </div>
        <footer>
            <span className = "author">
                &copy; {author}
            </span>
            <div>
                <ul className = "reference">
                    <li>
                        <a href = {gitRef} target = "_blank">
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a href = {designRef} target = "_blank">
                            Original design
                        </a>
                    </li>
                    <li>
                        <a href = {onixRef} target = "_blank">
                            Onix
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    </div>
  );
}

export default App;
