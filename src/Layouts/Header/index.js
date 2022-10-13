import "./style.css";
import { Link } from "react-router-dom";

function HeaderComp() {
    return (
        <>
            <div>
                <nav className="bs-navbar navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="bs-nav-link nav-link" to="/">Dashboard</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="bs-nav-link nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="bs-nav-link nav-link" href="#">Eco-System</a>
                                </li>
                                <li className="nav-item">
                                    <a className="bs-nav-link nav-link" href="#">Roadmap</a>
                                </li>
                                <li className="nav-item">
                                    <a className="bs-nav-link nav-link" href="#">Whitepaper</a>
                                </li>
                            </ul>
                            <span className="navbar-text">
                                <button className="btn me-2 bs-btn-orange" type="button">Free $10</button>
                                <button className="btn me-2 bs-btn-orange" type="button">BUY</button>
                                <Link to="/claim"><button className="btn me-2 bs-btn-orange" type="button">CLAIM</button></Link>
                            </span>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default HeaderComp;