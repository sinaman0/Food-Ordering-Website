import { LOGO_URL } from "../Utils/Constant";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div className="header">
            <div className="logo- container">
                <img className="logo" src={LOGO_URL}/>
            </div>

            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Homee</Link>
                     </li>
                      <li>
                        <Link to="/about">About</Link>
                     </li>
                     <li>
                        <Link to="/contact">Contact Us</Link>
                     </li>
                     <li>
                        <Link to="/cart">Cart</Link>
                     </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;