import axios from "axios";

export const resolveEns = async (domain) => {
  try {
    const res = await axios.get(`ens/resolve-ens/?domain=${domain}`);
    return (res.data);
  } catch (err) {
    return err;
  }
}

export const reverseResolveEns = async (address) => {
  try {
    const res = await axios.get(`ens/reverse-resolve-ens/?address=${address}`)
    return res.data;

  } catch (err) {
    return err;
  }
}