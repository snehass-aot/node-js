var jwt = require('jsonwebtoken');
const secretKey = "my-secret-key";







const tokenDecode = (req,res,next) => {
    const {token} = req.headers;
    if(!token) return res.status(401).send({error: 'Token not provided'})
        try{
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
    }catch(err){
        return res.status(401).send({error: 'Invalid token'});
        }
}

module.exports = {tokenDecode};