export const setWalletAddress = (address) => {
    return { 
        type: 'SET_WALLET_ADDRESS',
        address: address
    }
}

export const clearWalletAddress = () => {
    return { 
        type: 'CLEAR_WALLET_ADDRESS' 
    }
}