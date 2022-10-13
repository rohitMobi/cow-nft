import CreateTokenSectionComp from "../../Components/CreateTokenSection";
import HeaderComp from "../../Layouts/Header";
import SideUIDesign from "../../Assets/Images/SideUIDesign.png";
import CowLogin from "../../Assets/Images/CowLogin.png";
import NFTInsta from "../../Assets/Images/NFT-Insta.png";
import FooterComp from "../../Layouts/Footer";
import "./style.css";

function ClaimComp() {

    { document.title = "COW NFT | Claim" }

    return (
        <>
            <HeaderComp />
            <div className="bs-claim-main-section pt-5">
                <img src={SideUIDesign} className="bs-claim-left-img" alt="" />
                <img src={SideUIDesign} className="bs-claim-right-img" alt="" />
                <div className="bs-claim-dashboard-container">
                    <div className="container text-center mt-5">
                        <div className="row mb-5">
                            <div className="col">
                                <h1 className="bs-font-SimranITC display-1 bs-dashboard-heading">Claim your Cow Token now !</h1>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <h4 className="bs-font-OpenSans bs-dashboard-sub-heading p-5">
                                    Tamadoge is the ultimate memecoin Play-to-Earn platform, and the pre-sale has now sold out. You can use this page to claim your purchased Tamadoge tokens. Hit the connect wallet button below, and you’ll be able to see your claimable token balance. Once you’ve connected your wallet, hit claim and authorise the transaction. You can use the token information to track your TAMA in your wallet, or use the button below.
                                </h4>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <button className="btn px-5 bs-btn-orange"><i>Connect Wallet</i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bs-claim-wit-bg m-0 p-0">
                <div className="row">
                    <div className="col">
                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-start border-0" style={{ background: "transparent" }}>
                                <div className="bs-claim-circle-bg">
                                    <img className="bs-claim-img" src={NFTInsta} alt="" />
                                </div>
                                <div className="ms-2 me-auto">
                                    <h4 className="fw-bold bs-font-OpenSans" style={{ margin: "2rem 0" }}>CEX Listings confirmed after presale</h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-start border-0" style={{ background: "transparent" }}>
                                <div className="bs-claim-circle-bg">
                                    <img className="bs-claim-img" src={NFTInsta} alt="" />
                                </div>
                                <div className="ms-2 me-auto">
                                    <h4 className="fw-bold bs-font-OpenSans" style={{ margin: "2rem 0" }}>DEFI & Metaverse partnerships to be announced</h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className="list-group">
                            <li className="list-group-item d-flex justify-content-between align-items-start border-0" style={{ background: "transparent" }}>
                                <div className="bs-claim-circle-bg">
                                    <img className="bs-claim-img" src={NFTInsta} alt="" />
                                </div>
                                <div className="ms-2 me-auto">
                                    <h4 className="fw-bold bs-font-OpenSans" style={{ margin: "2rem 0" }}>Featured in the largest global publications</h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bs-bg-yellow">
                <div className="container-fluid text-center mt-5 p-5">
                    <div className="row mb-5">
                        <div className="col">
                            <h1 className="bs-font-SimranITC display-1 bs-claim-wit-color">ADDING TAMADOGE TO YOUR WALLET</h1>
                        </div>
                    </div>
                    <div className="row py-5">
                        <div className="col-lg-6 text-start">
                            <h5 className="mt-5">
                            Once you’ve claimed your Tamadoge you’ll need to import the tokens into your wallet. You can use the “Add TAMA to wallet” button, or follow these instructions. <br /><br />
                            First, in your chosen wallet click “import token” when connected to the Ethereum network. <br /><br />
                            Then paste in the wallet address - you may also need to type “TAMA” for the token symbol and specify 18 decimal places. <br /><br />
                            Then hit “Add Custom Token” and you’ll now be able to see any tamadoge you’ve claimed in your wallet.
                            </h5>
                        </div>
                        <div className="col-lg-6">
                            <img src={CowLogin} alt="" style={{ width: "100%", borderRadius: "20px" }}/>
                        </div>
                    </div>
                </div>
                <hr className="accessory" />

                <div className="container text-center mt-5 pt-5">
                    <div className="row mb-5">
                        <div className="col">
                            <h1 className="bs-font-SimranITC display-1 bs-claim-wit-color">TAMADOGE CONTRACT</h1>
                        </div>
                    </div>
                    <div className="row py-5">
                        <div className="col-lg-12 text-start">
                            <h4 className="bs-font-OpenSans fw-bold"> Use the contract information below to add the COW token to your wallet. </h4>
                            <h4 className="bs-font-OpenSans fw-bold"> Address: 0x12b6893cE26Ea6341919FE289212ef77e51688c8 </h4>
                            <h4 className="bs-font-OpenSans fw-bold"> Decimals: 18 </h4>
                            <h4 className="bs-font-OpenSans fw-bold"> Token symbol: COW </h4>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComp />
        </>
    )
}

export default ClaimComp;