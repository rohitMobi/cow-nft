import "./style.css";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

import IconButton from '@mui/material/IconButton';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import { useSelector, useDispatch } from "react-redux";
import { setWalletAddress, clearWalletAddress } from "../../Actions/index";

function HeaderComp(props) {
    
    const stateWalletAddress = useSelector((state) => state.updateWalletAddress);
    const dispatch = useDispatch();
    const path = window.location.pathname;

    const connectWallet = () => {
        if (window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(res => {
                    // Return the address of the wallet
                    toast.success("Wallet Connect");
                    dispatch(setWalletAddress(res[0]));
                    localStorage.setItem("cn-user-wallet-address", res);
                })
        } else {
            toast.error("Install metamask extension!!");
        }
    }

    const logout = async () => {
        dispatch(clearWalletAddress(""));
    }

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
                            {
                                path === "/dashboard" &&
                                <>
                                    <span className="navbar-text">
                                        <button className="btn me-2 bs-btn-orange" type="button">Free $10</button>
                                        <button className="btn me-2 bs-btn-orange" type="button">BUY</button>
                                        <Link to="/claim"><button className="btn me-2 bs-btn-orange" type="button">CLAIM</button></Link>
                                    </span>
                                </>
                            }
                            {
                                path === "/claim" &&
                                (
                                    stateWalletAddress === "" ?
                                        <>
                                            <span className="navbar-text">
                                                <IconButton aria-label="delete" size="large" onClick={() => connectWallet()}>
                                                    <AccountBalanceWalletOutlinedIcon className="text-marum-color" fontSize="larger" />
                                                </IconButton>
                                            </span>
                                        </>
                                        :
                                        <>
                                            <span className="navbar-text">
                                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                                    <li className="nav-item text-marum-color fs-5" style={{marginTop : "11px", marginBottom : "11px"}}>
                                                            { stateWalletAddress.slice(0, 7) + "..." + stateWalletAddress.slice(stateWalletAddress.length-5, stateWalletAddress.length) }
                                                    </li>
                                                    <li className="nav-item">
                                                        <IconButton aria-label="delete" size="large" onClick={() => logout()}>
                                                            <ExitToAppIcon className="text-marum-color" fontSize="larger" />
                                                        </IconButton>
                                                    </li>
                                                </ul>    
                                            </span>
                                        </>
                                )
                            }
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default HeaderComp;