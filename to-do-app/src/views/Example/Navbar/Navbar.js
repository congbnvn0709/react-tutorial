import React from "react";
import {
    NavLink,
    Link,
    BrowserRouter,
    HashRouter,
    Outlet,
} from "react-router-dom";
import './style.scss'
class NavBar extends React.Component {
    render() {
        return (
            <>
                <div className="topnav">
                    <Link to='/'>Home</Link>
                    <Link to='/todo'>Todos</Link>
                </div>
                <Outlet />
            </>

        )
    }
}
export default NavBar;