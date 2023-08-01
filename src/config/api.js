import axios from 'axios';

export default axios.create({
  baseURL: "https://parseapi.back4app.com/classes",
  headers: {
    'X-Parse-Application-Id': 'dpOffLRBbjdI0tvMzj3NGGYqY0mvKG9hGIZ6dKVP',
    'X-Parse-REST-API-Key': 'mFXONL1NRqhmcc3N6FQngYhZcFVkIZqivVSOL3R9',
    'Content-Type': 'application/json'
  }
});
