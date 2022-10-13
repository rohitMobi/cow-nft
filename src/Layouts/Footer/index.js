import "./style.css";
import { Link } from "react-router-dom";

function FooterComp() {
    return (
        <>
            <div>
                <div className="container bs-footer-bg">
                    <footer className="p-5 m-5 bs-footer-section">
                        <div className="row py-5">
                            <div className="col-lg-4 col-md-4">
                                <h5 className="bs-font-SimranITC">COW NFT</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2 bs-font-OpenSans"><Link className="nav-link p-0 text-muted">Roadmap</Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-4">
                                <h5 className="bs-font-SimranITC">LINKS</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2 bs-font-OpenSans"><Link className="nav-link p-0 text-muted">Contract</Link></li>
                                    <li className="nav-item mb-2 bs-font-OpenSans"><Link className="nav-link p-0 text-muted">Whitepaper</Link></li>
                                    <li className="nav-item mb-2 bs-font-OpenSans"><Link className="nav-link p-0 text-muted">Solid Proof Audit</Link></li>
                                    <li className="nav-item mb-2 bs-font-OpenSans"><Link className="nav-link p-0 text-muted">Coin Sniper</Link></li>
                                    <li className="nav-item mb-2 bs-font-OpenSans"><Link className="nav-link p-0 text-muted">Privacy Policy</Link></li>
                                    <li className="nav-item mb-2 bs-font-OpenSans"><Link className="nav-link p-0 text-muted">Cookie Policy</Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-4">
                                <h5 className="bs-font-SimranITC">COMMUNITY</h5>
                            </div>
                        </div>
                        <div className="row py-5 my-5">
                            <div className="col">
                                <h5 className="bs-font-SimranITC">DISCLAIMER</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2 bs-font-OpenSans"><Link className="nav-link p-0 text-muted">Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may go down as well as up.
                                        <br />Profits may be sujbect to capital gains or other taxes applicable in your jurisdiction</Link></li>
                                </ul>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}

export default FooterComp;