import updateWalletAddress from "./walletAddress";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ 
    updateWalletAddress: updateWalletAddress,
});

export default rootReducer;                                                         
