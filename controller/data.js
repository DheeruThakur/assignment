const axios = require("axios");
const Data = require("../models/data");

exports.fetchData = async (req, res, next) => {
  try {
    const result = await axios.get("https://api.wazirx.com/api/v2/tickers");
    const info = result.data;
    const arr = [];
    for (var key in info) {
      const { name, last, buy, sell, volume, base_unit } = info[key];
      arr.push({ name, last, buy, sell, volume, base_unit });
      if (arr.length === 10) break;
    }
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
      let data = new Data(arr[i]);
      await data.save();
    }
    res.send(arr);
  } catch (e) {
    console.log(e);
    res.send(`Error occured ${e}`);
  }
};
