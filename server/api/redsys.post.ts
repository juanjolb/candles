import { nanoid } from "nanoid"
import crypto from "crypto"

 export default defineEventHandler((event)=> {

     const amount = 123;
     const merchantParameters = {
            DS_MERCHANT_AMOUNT: amount,
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
    const Ds_MerchantParameters = Buffer.from(JSON.stringify(merchantParameters)).toString('base64')
    const Ds_SignatureVersion = "HMAC_SHA256_V1";
    
    function encrypt3DES(data, key) {
        const md5Key = crypto.createHash('md5').update(key).digest("hex").substr(0, 24);
        const cipher = crypto.createCipheriv('des-ede3', md5Key, '');

        let encrypted = cipher.update(data, 'utf8', 'base64');
        encrypted += cipher.final('base64');
        return encrypted;
  }   

    const calcSignature = (key, merchantParameters, merchant64) => {
       // pagosonline.redsys.es/conexion-redireccion.html
       let BASE64_KEY = Buffer.from(key).toString('base64');
       //    console.log('base key ', BASE64_KEY);
       let DIVERSIFIED = encrypt3DES(merchantParameters.DS_MERCHANT_ORDER, BASE64_KEY);
       //    console.log('diversified ', DIVERSIFIED);
       let HMAC = crypto.createHmac('sha256', merchant64).update(DIVERSIFIED).digest("base64");
       return HMAC;
    }
      
    const Ds_Signature = calcSignature(KEY, merchantParameters, Ds_MerchantParameters);

    return {
        Ds_MerchantParameters: Ds_MerchantParameters,
        Ds_SignatureVersion: Ds_SignatureVersion,
        Ds_Signature: Ds_Signature
    }
    
})