import "./style.css";
import HeaderComp from "../../Layouts/Header";
import SideUIDesign from "../../Assets/Images/SideUIDesign.png";
import FeaturedComp from "../../Components/Featured";
import AboutComp from "../../Components/About";
import FooterComp from "../../Layouts/Footer";
import PartnerComp from "../../Components/Partner";
import CollectionComp from "../../Components/Collection";

function DashboardComp() {

    { document.title = "COW NFT | Dashboard" }

    return (
        <>
            <HeaderComp />
            <div className="bs-main-section">
                <img src={SideUIDesign} className="bs-left-img" alt="" />
                <img src={SideUIDesign} className="bs-right-img" alt="" />
                <div className="bs-dashboard-container">
                    <div className="container text-center mt-5">
                        <div className="row mb-5">
                            <div className="col">
                                <h1 className="bs-font-SimranITC display-1 bs-dashboard-heading">COW NFT</h1>
                                <h4 className="bs-font-OpenSans bs-dashboard-sub-heading"><i>BuyTamadoge and OKX and OKX DEX now !!</i></h4>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <button className="btn w-100 bs-btn-orange"><i>Buy on OKX</i></button>
                            </div>
                            <div className="col">
                                <button className="btn w-100 bs-btn-orange"><i>Buy on OKX DEX</i></button>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <button className="btn w-100 bs-btn-yellow"><i>Claim</i></button>
                            </div>
                            <div className="col">
                                <button className="btn w-100 bs-btn-yellow"><i>How to Claim</i></button>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <button className="btn w-100 bs-btn-yellow"><i>How to buy on OKX</i></button>
                            </div>
                            <div className="col">
                                <button className="btn w-100 bs-btn-yellow"><i>How to buy on DEX</i></button>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>

            <div className="bs-bg-yellow">
                <div className="container">
                    <FeaturedComp />
                    <hr className="accessory" />
                    <AboutComp />
                    <hr className="accessory" />
                    <PartnerComp />
                    <hr className="accessory" />
                    <CollectionComp />
                </div>    
            </div>
            <FooterComp />
        </>
    )
}

export default DashboardComp;