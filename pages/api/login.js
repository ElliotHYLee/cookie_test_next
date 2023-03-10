import cookie from "cookie"

export default( req, res) => {

    res.setHeader("Set-Cookie", cookie.serialize("token", req.body.token + "ssradded", {
        httpOnly: true,
        secure: true, //process.env.NODE_ENV !== "development",
        maxAge: 60*60,
        sameSite: "strict",
        path:"/",
        domain:".airnhschool.com" // don't put "*" in front of domain
        
        
    }))
    res.statusCode = 200;
    res.json({success:true})
}