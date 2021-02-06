// const FRONTEND_PROD_URLS = ["http://localhost:3000", "http://localhost:3000"];

const FRONTEND_DEV_URLS = ["http://localhost:3000"];
const FRONTEND_PROD_URLS = ["https://the-authors.netlify.app", "https://the-authors.netlify.app"];

console.log("process.env.NODE_ENV which comes to payment/constants/frontend.js = ", process.env.NODE_ENV)
////****process.env.NODE_ENV values comes here from heroku config settings********
////**** it is there set as production by default, but inside heroku can be manually changed to another one*****
////***by changing production to development on line 12 you can switch to localhost if needed****

module.exports =
  process.env.NODE_ENV === "production"
    ? FRONTEND_PROD_URLS
    : FRONTEND_DEV_URLS;

    