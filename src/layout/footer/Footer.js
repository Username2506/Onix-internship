function Footer() {
    const author = "Никита Ламекин",
        gitRef = "https://github.com/Username2506",
        designRef = "https://nodejs.org/uk/docs/",
        onixRef = "https://onix.kr.ua/";
    return (
        <footer>
            <span className = "author">
                &copy; {author}
            </span>
            <div>
                <ul className = "reference">
                    <li>
                        <a href = {gitRef} target = "_blank" rel = "noreferrer">
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a href = {designRef} target = "_blank" rel = "noreferrer">
                            Original design
                        </a>
                    </li>
                    <li>
                        <a href = {onixRef} target = "_blank" rel = "noreferrer">
                            Onix
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;