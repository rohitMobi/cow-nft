import "./style.css";
import NFTDeco from "../../Assets/Images/NFT-Deco.svg";
import NFTSwim from "../../Assets/Images/NFT-Swim.svg";

function FeaturedComp() {
    return (
        <>
            <div class="container text-center mt-5 pb-5">
                <div class="row mb-5">
                    <div class="col">
                        <h1 className="bs-font-SimranITC display-1 bs-featured-heading">Featured In</h1>
                    </div>
                </div>
                <div class="row mb-5">
                    <div class="col">
                        <div class="bs-featured-circle-bg">
                            <img class="bs-featured-img" src={NFTDeco} alt="" />
                        </div>
                        <div class="bs-featured-circle-bg">
                            <img class="bs-featured-img" src={NFTSwim} alt="" />
                        </div>
                    </div>
                </div>
                <div class="row mb-5">
                    <div class="col">
                        <h1 className="bs-font-SimranITC bs-featured-sub-heading">100% Secure</h1>
                        <h6 class="bs-font-OpenSans bs-featured-para-1">
                            Contract code fully audited by Solid Proof and shown to be 100% secure
                            <br />
                            Team fully verified by Coinsniper to ensure anti-rug and complete project security
                        </h6>
                    </div>
                </div>
                <div class="row mb-5">
                    <div class="col">
                        <button class="btn bs-featured-btn-dw bs-font-OpenSans">Download Whitepaper</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturedComp;