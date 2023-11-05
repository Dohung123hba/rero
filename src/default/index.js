import { Link, Outlet } from "react-router-dom";
import "./style.scss"
import { useSelector } from "react-redux";

function DefaultUI (){
    let cart = useSelector(state => state.cartReducer)
    return(
        <>
            <div className="wrap">
                <header className="header">
                    <div>Logo</div>
                    <ul className="menu">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/cart">Cart ({cart.length})</Link>
                        </li>
                    </ul>
                </header>
                <main className="main">
                <Outlet />
                </main>
                <footer className="footer">
                    Coppyright @ 2023 HSDEV
                </footer>
            </div>
        </>
    )
}
export default DefaultUI;