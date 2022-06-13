import { nanoid } from "nanoid"
import cryptojs from "crypto-js"

 export default defineEventHandler((event)=> {
    
     const merchParams = {
            DS_MERCHANT_AMOUNT: "14000",
            DS_MERCHANT_CURRENCY: "978",
            DS_MERCHANT_MERCHANTCODE: "094002979",
            DS_MERCHANT_MERCHANTURL: "http://www.prueba.com/urlNotificacion.php",
            DS_MERCHANT_TERMINAL: "1",
            DS_MERCHANT_ORDER: nanoid(12),
            DS_MERCHANT_TRANSACTIONTYPE: "0",
            DS_MERCHANT_URLKO: "http://www.prueba.com/urlKO.php",
            DS_MERCHANT_URLOK: "http://www.prueba.com/urlOK.php"
    }
    
    const KEY = "B62V22ZV9S5wWPz3dbomGLh9EI2dOHmw"
    const Ds_SignatureVersion = "HMAC_SHA256_V1";

    //Base64 encoding of parameters
    const merchantWordArray = cryptojs.enc.Utf8.parse(JSON.stringify(merchParams));
    const merchantBase64 = merchantWordArray.toString(cryptojs.enc.Base64);

    //Decode key
    const keyWordArray = cryptojs.enc.Base64.parse(KEY);

    //Generate transaction key
    const iv = cryptojs.enc.Hex.parse("0000000000000000");
    const cipher = cryptojs.TripleDES.encrypt(merchParams.DS_MERCHANT_ORDER, keyWordArray, {
        iv:iv,
        mode: cryptojs.mode.CBC,
        padding: cryptojs.pad.ZeroPadding
    });

    //Sign
    const signature = cryptojs.HmacSHA256(merchantBase64, cipher.ciphertext);
    const signatureBase64 = signature.toString(cryptojs.enc.Base64);

    return {  
        Url: "https://sis.redsys.es/sis/realizarPago",
        Ds_MerchantParameters: merchantBase64,
        Ds_SignatureVersion: Ds_SignatureVersion,
        Ds_Signature: signatureBase64
     }
    
})