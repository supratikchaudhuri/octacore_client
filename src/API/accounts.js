import axios from "axios";

export const getBalance = async (address) => {
  try {
    const response = await axios.get(`/accounts/getBalance/?address=${address}`)
    let items = [] 
    for (const key in response.data) {
      items.push(`${key}: ${response.data[key].balance}`)
    }
    return items

  } catch (err) {
    return err;
  }
}

export const getPendingBalance = async (address) => {
  try {
    const res = await axios.get(`/accounts/getPendingBalanceAt/?address=${address}`)
    
    let items = [] 
    for (const key in res.data) {
      items.push(`${key}: ${res.data[key].pendingBalance}`)
    }
    return items

  } catch (err) {
    return err;
  }
}

export const getAllAssets = async (address) => {
  try {
    const res = await axios.get(`/accounts/getAllAssetsByAddress/?address=${address}`)
    const erc20AssetsList = res.data.result.eth.result.erc20;
    const erc721AssetsList = res.data.result.eth.result.erc721;
    const erc1155AssetsList = res.data.result.eth.result.erc115;
    
    return {erc20AssetsList, erc721AssetsList, erc1155AssetsList};

  } catch (err) {
    return err;
  }
}


// export const getNFTAssets = async (address) => {
//   try {
//     const res = await axios.get(`/accounts/getNftAssets/?address=${address}`)
//     return res.data;
//   } catch (err) {
//     return err
//   }
// }
