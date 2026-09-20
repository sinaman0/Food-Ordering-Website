import { LOGO_URL } from "../Utils/Constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus"


export const Header = () => {

    const onlinestatus = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo- container">
                <img className="logo" src={LOGO_URL}/>
            </div>

            <div className="nav-items">
                <ul>
                    <li>
                          Online Status : {onlinestatus ? "🟢" : "🔴" }
                    </li>
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