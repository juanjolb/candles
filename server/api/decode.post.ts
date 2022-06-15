import cryptojs from "crypto-js"

export default defineEventHandler(async (event) => {

    const body = await useBody(event);
    
    const Ds_MerchantParameters = body.params.Ds_MerchantParameters
    const Ds_Signature = body.params.Ds_Signature

    //DECODE MERCHPARAMS
    const wordsArray = cryptojs.enc.Base64.parse(Ds_MerchantParameters);
    const merchParameters = cryptojs.enc.Utf8.stringify(wordsArray);
    
    return JSON.parse(merchParameters)

})