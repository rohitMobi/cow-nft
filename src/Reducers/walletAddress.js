const initialState = "";

const updateWalletAddress = (state = initialState, action) => {
    switch (action.type) {
        case "SET_WALLET_ADDRESS": return action.address;
        case "CLEAR_WALLET_ADDRESS": return "";
        default: return state;
    }
}

export default updateWalletAddress;
