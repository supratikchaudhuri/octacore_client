import axios from "axios";

export const getTxnData = async (txnHash) => {
  try {
    const res = await axios.get(`/transactions/getTransactionData/?hash=${txnHash}`)
    return res.data;

  } catch (err) {
    return err
  }
}

export const getTxnDataByBlockHashAndIdx = async (blockHash, idx) => {
  try {
    const res = await axios.get(`/transactions/getTransactionByBlockHashAndIndex/?blockHash=${blockHash}&index=${idx}`)
    console.log(res);
  } catch (err) {
    return err;
  }
}

export const getTxnDataByBlockNoAndIdx = async (blockNo, idx) => {
  try {
    const res = await axios.get(`/transactions/getTransactionByBlockNumberAndIndex/?blockHash=${blockNo}&index=${idx}`)
    console.log(res);
  } catch (err) {
    return err;
  }
}
