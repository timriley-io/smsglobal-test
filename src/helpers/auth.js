import CryptoJS from "crypto-js";

// Generate the auth header
export const generateAuthHeader = (method, keyObj) => {
    console.assert(method == "GET" || method == "POST");

    let nonce = Math.floor((Math.random() * 10000000000));
    let timestamp = Math.floor(Date.now() / 1000);
    
    // Just putting a little note here so if anyone reads this they can laugh at my expense
    // I spent a good hour trying to figure out why my header was consistently being rejected
    // for "bad mac", I tried manually hashing/signing, tried different formats, tried so
    // many diffent things...
    // Wanna know what I messed up? 
    // I'd made a typo in the port number
    // 433 =/= 443

    let msg = `${timestamp}\n${nonce}\n${method}\n/v2/sms/\napi.smsglobal.com\n443\n\n`;
    let hash = CryptoJS.HmacSHA256(msg, keyObj.secret);
    
    let base64 = CryptoJS.enc.Base64.stringify(hash);
    let auth = `MAC id="${keyObj.key}", ts="${timestamp}", nonce="${nonce}", mac="${base64}"`;
    
    return auth;
}