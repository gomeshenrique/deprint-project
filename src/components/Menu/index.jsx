import { useState } from "react";
import { List } from "phosphor-react";
import { Nav } from "./style";
import logo from "../../common/img/logo_deprint.svg"

export const Menu = () => {
    const [openMenu, setOpenMenu] = useState(false)

    function handeClick(){
        setOpenMenu(false)
    }

    return (<Nav openMenu={openMenu}>
        <a href="#"><img src={logo} alt="Logomarca De Print" /></a>
        <ul>
            <li><a onClick={handeClick} href="#">Home</a></li>
            <li><a onClick={handeClick} href="#">About</a></li>
            <li><a onClick={handeClick} href="#">Maps</a></li>
            <li><a onClick={handeClick} href="#">Review</a></li>
        </ul>
        <a onClick={handeClick} href="#contacts">Contact</a>
        <button onClick={() => setOpenMenu(!openMenu)}><List size={20} /></button>
    </Nav>);
};