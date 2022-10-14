import "./style.css";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

import IconButton from '@mui/material/IconButton';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useEffect, useState } from "react";

function HeaderComp(props) {
    const { setUserWalletAddress, userWalletAddress } = props;
    const [walletAddress, setWalletAddress] = useState("");
    const path = window.location.pathname;

    const connectWallet = () => {
        if (window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(res => {
                    // Return the address of the wallet
                    toast.success("Wallet Connect");
                    setUserWalletAddress(res[0]);
                    setWalletAddress(res[0]);
                    localStorage.setItem("cn-user-wallet-address", res);
                })
        } else {
            toast.error("Install metamask extension!!");
        }
    }

    const logout = async () => {
        localStorage.removeItem("cn-user-wallet-address");
        setWalletAddress("");
        setUserWalletAddress("");
    }

    useEffect(() => {
        if (localStorage.getItem("cn-user-wallet-address") != null || userWalletAddress) {
            setWalletAddress(localStorage.getItem("cn-user-wallet-address"));
        } else {
            setWalletAddress("")
        }
    }, []);

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
                                    walletAddress === "" || userWalletAddress === "" ?
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
                                                            { walletAddress.slice(0, 7) + "..." + walletAddress.slice(walletAddress.length-5, walletAddress.length) }
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