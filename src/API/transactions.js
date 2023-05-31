import axios from "axios";

export const getTxnData = async (txnHash) => {
  try {
    const res = await axios.get(`/transactions/getTransactionData/?hash=${txnHash}`)
    console.log(res);
    return res.data;

  } catch (err) {
    return err
  }
}

export const getTxnDataByBlockHashAndIdx = async (blockHash, idx) => {
  console.log("calling hash");
  try {
    const res = await axios.get(`/transactions/getTransactionByBlockHashAndIndex/?blockHash=${blockHash}&index=${idx}`)
    console.log(res);
    return res.data.result.eth
  } catch (err) {
    return err;
  }
}

export const getTxnDataByBlockNoAndIdx = async (blockNo, idx) => {
  console.log("calling number");
  try {
    const res = await axios.get(`/transactions/getTransactionByBlockNumberAndIndex/?blockHash=${blockNo}&index=${idx}`)
    console.log(res);
    return res.data.result.eth;
  } catch (err) {
    return err;
  }
}
