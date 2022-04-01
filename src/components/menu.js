import * as React from "react"
import { Link } from "gatsby"

const Menu = () => {
    return (
        <nav className="menu-container">
            <ul>
                <li><Link to="/" activeClassName="active">Strona główna</Link></li>
                <li><a href="https://whermaszewski.wordpress.com/">Blog</a></li>
                <li><Link to="/publikacje" activeClassName="active">Publikacje</Link></li>
                <li><Link to="/o_mnie" activeClassName="active">O mnie</Link></li>
                <li><Link to="/kontakt" activeClassName="active">Kontakt</Link></li>
            </ul>
        </nav>
    )
}

export default Menu