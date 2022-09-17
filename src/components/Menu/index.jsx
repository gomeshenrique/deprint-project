import { Nav } from "./style";
import logo from "../../common/img/logo_example.svg"

//teste menu
export const Menu = () => {
    return (<Nav>
        <img src={logo} alt="Logomarca De Print" />
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Maps</a></li>
            <li><a href="#">Review</a></li>
        </ul>
        <a className="ct-button" href="#">Contact</a>
    </Nav>);
};