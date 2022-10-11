import "./style.css";
import { Link } from "react-router-dom";

function FooterComp() {
    return (
        <>
            <div>
                <div class="container bs-footer-bg">
                    <footer class="p-5 m-5 bs-footer-section">
                        <div class="row py-5">
                            <div class="col-lg-4 col-md-4">
                                <h5 class="bs-font-SimranITC">COW NFT</h5>
                                <ul class="nav flex-column">
                                    <li class="nav-item mb-2 bs-font-OpenSans"><Link class="nav-link p-0 text-muted">Roadmap</Link></li>
                                </ul>
                            </div>

                            <div class="col-lg-4 col-md-4">
                                <h5 class="bs-font-SimranITC">LINKS</h5>
                                <ul class="nav flex-column">
                                    <li class="nav-item mb-2 bs-font-OpenSans"><Link class="nav-link p-0 text-muted">Contract</Link></li>
                                    <li class="nav-item mb-2 bs-font-OpenSans"><Link class="nav-link p-0 text-muted">Whitepaper</Link></li>
                                    <li class="nav-item mb-2 bs-font-OpenSans"><Link class="nav-link p-0 text-muted">Solid Proof Audit</Link></li>
                                    <li class="nav-item mb-2 bs-font-OpenSans"><Link class="nav-link p-0 text-muted">Coin Sniper</Link></li>
                                    <li class="nav-item mb-2 bs-font-OpenSans"><Link class="nav-link p-0 text-muted">Privacy Policy</Link></li>
                                    <li class="nav-item mb-2 bs-font-OpenSans"><Link class="nav-link p-0 text-muted">Cookie Policy</Link></li>
                                </ul>
                            </div>

                            <div class="col-lg-4 col-md-4">
                                <h5 class="bs-font-SimranITC">COMMUNITY</h5>
                            </div>
                        </div>
                        <div class="row py-5 my-5">
                            <div class="col">
                                <h5 class="bs-font-SimranITC">DISCLAIMER</h5>
                                <ul class="nav flex-column">
                                    <li class="nav-item mb-2 bs-font-OpenSans"><Link class="nav-link p-0 text-muted">Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may go down as well as up.
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