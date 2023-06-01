import axios from "axios";

String.prototype.isNumber = function(){return /^\d+$/.test(this);}

export const getAllTxns = async (block) => {
  try {
    let res
    console.log(block.isNumber());
    if(block.isNumber()) {
      console.log(parseInt(block))
      res = await axios.get(`block/getAllTxnByBlockNo/?blockNo=${block}`)
    }
    else {
      res = await axios.get(`block/getAllTxnByBlockHash/?blockHash=${block}`)
    }
    console.log(res.data.transactions.slice(0, 10));
    
    let obj = {}
    for(let i = 0; i <= 10; i++) {
      obj[i] = res.data.transactions[i].hash
    }
    console.log(obj);
    return obj;


  } catch (err) {
    return err;
  }
}

export const getBlockData = async (block) => {
  try {
    let res
    if(block.isNumber(block)) {
      console.log(parseInt(block))
      res = await axios.get(`block/getBlockDataByBlockNo/?blockNo=${block}`)
    }
    else {
      res = await axios.get(`block/getBlockDataByHash/?blockHash=${block}`)
    }
    
    return res.data

  } catch (err) {
    return err;
  }
}

export const getBlockHeader = async (block) => {
  try {
    let res
    if(block.isNumber(block)) {
      res = await axios.get(`block/getBlockHeaderByBlockNo/?blockNo=${block}`)
    }
    else {
      res = await axios.get(`block/getBlockHeaderByBlockHash/?blockHash=${block}`)
    }

    return res.data.header;

  } catch (err) {
    return err;
  }
}