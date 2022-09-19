import { useState } from "react";
import { Nav } from "./style";
import logo from "../../common/img/logo_example.svg"

//teste menu
export const Menu = () => {
    const [openMenu, setOpenMenu] = useState(false)

    return (<Nav openMenu={openMenu}>
        <a href="#"><img src={logo} alt="Logomarca De Print" /></a>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Maps</a></li>
            <li><a href="#">Review</a></li>
        </ul>
        <a href="#">Contact</a>
        <button onClick={() => setOpenMenu(!openMenu)}>&#9776;</button>
    </Nav>);
};