import axios from 'axios';

export default axios.create({
  baseURL: "https://parseapi.back4app.com/classes",
  headers: {
    'X-Parse-Application-Id': '0RN8jSSFhy3k0g9ASjdWh5FahKtENT897Ut96BFz',
    'X-Parse-REST-API-Key': 'b1fqhHoWC32Hvb1RAd3QCAferSgPB0zxV4mWtSgj',
    'Content-Type': 'application/json'
  }
});