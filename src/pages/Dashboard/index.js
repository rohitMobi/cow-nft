import HeaderComp from "../../Layouts/Header";
import SideUIDesign from "../../Assets/Images/SideUIDesign.png";
import "./style.css";
import FeaturedComp from "../Featured";
import AboutComp from "../About";

function DashboardComp() {
    return (
        <>
            <HeaderComp />
            <div className="bs-main-section">
                <img src={SideUIDesign} className="bs-left-img"/>
                <img src={SideUIDesign} className="bs-right-img"/>
                <div className="bs-dashboard-container">
                    <div class="container text-center mt-5">
                        <div class="row mb-5">
                            <div class="col">
                                <h1 className="bs-font-SimranITC bs-dashboard-heading">COW NFT</h1>
                                <h4 className="bs-font-OpenSans bs-dashboard-sub-heading"><i>BuyTamadoge and OKX and OKX DEX now !!</i></h4>
                            </div>
                        </div>
                        <div class="row mb-5">
                            <div class="col">
                                <button className="btn w-100 bs-btn-orange"><i>Buy on OKX</i></button>
                            </div>
                            <div class="col">
                                <button className="btn w-100 bs-btn-orange"><i>Buy on OKX DEX</i></button>
                            </div>
                        </div>
                        <div class="row mb-5">
                            <div class="col">
                                <button className="btn w-100 bs-btn-yellow"><i>Claim</i></button>
                            </div>
                            <div class="col">
                                <button className="btn w-100 bs-btn-yellow"><i>How to Claim</i></button>
                            </div>
                        </div>
                        <div class="row mb-5">
                            <div class="col">
                                <button className="btn w-100 bs-btn-yellow"><i>How to buy on OKX</i></button>
                            </div>
                            <div class="col">
                                <button className="btn w-100 bs-btn-yellow"><i>How to buy on DEX</i></button>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>

            <div class="bs-bg-yellow">
                <FeaturedComp />
                <hr class="accessory" />
                <AboutComp />
            </div>
        </>
    )
}

export default DashboardComp;