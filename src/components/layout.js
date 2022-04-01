import * as React from "react"
import Menu from "../components/menu"
import "./layout.css"
import styled from "styled-components"

const StyledMain = styled.main`

`;

const Layout = ({ children }) => {
    return (
        <div className="container">
            <header><h1>Witold Hermaszewski | hermaszewskitravel.pl</h1>
                <Menu />
            </header>
            <StyledMain>
                {children}
            </StyledMain>
            <footer>
                <Menu />
                <p>hermaszewskitravel.pl | 2022</p>
            </footer>
        </div>)
}

export default Layout