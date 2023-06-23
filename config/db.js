import { connect } from "mongoose";
connect ( process.env.LINK_DB)
.then ( ()=> console.log("connected to data base") )
.catch ( (err)=> console.log(err) )