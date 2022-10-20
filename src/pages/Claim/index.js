import HeaderComp from "../../Layouts/Header";
import SideUIDesign from "../../Assets/Images/SideUIDesign.png";
import CowBottomImg from "../../Assets/Images/CowBottomImg.png";
import CowLogin from "../../Assets/Images/CowLogin.png";
import NFTInsta from "../../Assets/Images/NFT-Insta.png";
import FooterComp from "../../Layouts/Footer";
import { toast } from 'react-toastify';
import "./style.scss";
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';

function ClaimComp() {

    { document.title = "COW NFT | Claim" }

    const [userWalletAddress, setUserWalletAddress] = useState("");
    const [slot, setSlot] = useState(false);
    const [slot1, setSlot1] = useState(false);
    const [slot2, setSlot2] = useState(false);
    const [slot3, setSlot3] = useState(false);
    const [amount, setAmount] = useState(0);

    const claimToken = () => {
        console.log("Amount: ", amount);
    }

    const connectWallet = () => {
        if (window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(res => {
                    // Return the address of the wallet
                    toast.success("Wallet Connect");
                    setUserWalletAddress(res[0]);
                    localStorage.setItem("cn-user-wallet-address", res);
                })
        } else {
            toast.error("Install metamask extension!!");
        }
    }

    const checkSlotAvailable = () => {
        var today = new Date();
        const long = today.getTime();
        var slot1Date = new Date('2022-10-20');
        const long1 = slot1Date.getTime();
        var slot2Date = new Date('2022-10-25');
        const long2 = slot2Date.getTime();
        var slot3Date = new Date('2022-10-27');
        const long3 = slot3Date.getTime();

        const debtAmount = document.getElementsByName("debt-amount");

        if(long1 <= long && long2 > long){
            setSlot1(true);
            setSlot2(false);
            setSlot3(false);
        }else if(long2 <= long && long3 > long){
            setSlot1(false);
            setSlot2(true);
            setSlot3(false);
        }else if(long3 <= long){
            setSlot1(false);
            setSlot2(false);
            setSlot3(true);
        }
    }

    useEffect(() => {
        if (localStorage.getItem("cn-user-wallet-address") != null) {
            setUserWalletAddress(localStorage.getItem("cn-user-wallet-address"));
        } else {
            setUserWalletAddress("")
        }
        checkSlotAvailable();
    }, []);

    return (
        <>
            <HeaderComp setUserWalletAddress={setUserWalletAddress} userWalletAddress={userWalletAddress} />
            <div className="bs-claim-main-section">
                <img src={SideUIDesign} className="bs-claim-left-img" alt="" />
                <img src={SideUIDesign} className="bs-claim-right-img" alt="" />
                <img src={CowBottomImg} className="bs-claim-bottom-left-img" alt="" />
                <img src={CowBottomImg} className="bs-claim-bottom-right-img" alt="" />
                <div className="bs-claim-dashboard-container mb-5">
                    <div className="container text-center mt-5 mb-5">
                        <div className="row">
                            <div className="col">
                                <h1 className="bs-font-SimranITC display-1 bs-dashboard-heading">Private Sale</h1>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col">
                                <h4 className="bs-font-OpenSans bs-dashboard-sub-heading p-5">
                                    COWNFT is the ultimate coin Play-to-Earn platform
                                </h4>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-lg-12">
                                {
                                    userWalletAddress === "" ?
                                        <button onClick={() => connectWallet()} className="btn px-5 bs-btn-orange"><i>Connect Wallet</i></button>
                                        :
                                        <>
                                            <div className="row">
                                                
                                                <div className="col-lg-6 offset-lg-3 mb-5">
                                                    <table class="table bs-font-OpenSans">
                                                        <thead class="thead-dark">
                                                            <tr>
                                                                <th scope="col"></th>
                                                                <th scope="col" className="thtdActive">Total Token</th>
                                                                <th scope="col" className="thtdActive">Price</th>
                                                                <th scope="col" className="thtdActive">From Date</th>
                                                                <th scope="col" className="thtdActive">To Date</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row" className="thtdActive">Slot 1</th>
                                                                <td>25M</td>
                                                                <td>USDC 0.01</td>
                                                                <td>20 OCT 2022</td>
                                                                <td>24 OCT 2022</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" className="thtdActive">Slot 2</th>
                                                                <td>50M</td>
                                                                <td>USDC 0.02</td>
                                                                <td>25 OCT 2022</td>
                                                                <td>27 OCT 2022</td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row" className="thtdActive">Slot 3</th>
                                                                <td>50M</td>
                                                                <td>USDC 0.03</td>
                                                                <td>28 OCT 2022</td>
                                                                <td>31 OCT 2022</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div id="form-wrapper">
                                                        <form>
                                                            <div id="debt-amount-slider">
                                                                <input type="radio" name="debt-amount" id="1" value="1" disabled />
                                                                <label className="bs-font-SimranITC" for="1" data-debt-amount=""></label>
                                                                <input type="radio" name="debt-amount" id="2" value="2" disabled checked={slot1} />
                                                                <label className="bs-font-SimranITC" for="2" data-debt-amount="Slot 1"></label>
                                                                <input type="radio" name="debt-amount" id="3" value="3" disabled checked={slot2} />
                                                                <label className="bs-font-SimranITC" for="3" data-debt-amount="Slot 2"></label>
                                                                <input type="radio" name="debt-amount" id="4" value="4" disabled checked={slot3} />
                                                                <label className="bs-font-SimranITC" for="4" data-debt-amount="Slot 3"></label>
                                                                <input type="radio" name="debt-amount" id="5" value="5" disabled />
                                                                <label className="bs-font-SimranITC" for="5" data-debt-amount=""></label>
                                                                <div id="debt-amount-pos"></div>
                                                            </div>
                                                            {/* <div id="debt-amount-slider">
                                                                <input type="radio" name="debt-amount" id="slotRadio1" value="1" required />
                                                                <label className="bs-font-SimranITC" for="1" data-debt-amount="Slot 1"></label>
                                                                <input type="radio" name="debt-amount" id="slotRadio2" value="2" required />
                                                                <label className="bs-font-SimranITC" for="2" data-debt-amount="Slot 2"></label>
                                                                <input type="radio" name="debt-amount" id="slotRadio3" value="3" required />
                                                                <label className="bs-font-SimranITC" for="3" data-debt-amount="Slot 3"></label>
                                                                <div id="debt-amount-pos"></div>
                                                            </div> */}
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 offset-lg-4 col-sm-12">
                                                    <div>
                                                        <div className="text-input">
                                                            <input type="number" id="input1" placeholder="Enter Amount" />
                                                            <label htmlFor="input1">$</label>
                                                        </div>
                                                        <div>
                                                            <Button variant="outlined" className="claimBtn bs-font-OpenSans" onClick={() => claimToken()}>Claim Token</Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                }
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
                            <img src={CowLogin} alt="" style={{ width: "100%", borderRadius: "20px" }} />
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