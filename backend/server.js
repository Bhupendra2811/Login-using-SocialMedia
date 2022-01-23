const express = require('express')
const cookieSession = require("cookie-session");
const passportSetup = require("./passport")
const passport = require("passport");
const authRoute = require("./routes/auth")
const cors = require("cors");
const app = express()
const port = 5000

app.use(cookieSession(
    {
        name:"session",
        keys:["lama"],
        maxAge:24*60*60*100
    }
))
app.use(passport.initialize());
app.use(passport.session());
 
app.use(
    cors({
    origin:"https://localhost:3000",
    methods:"GET,POST,PUT,DELETE",
    credentialS:true
})
);
app.use("/auth", authRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})