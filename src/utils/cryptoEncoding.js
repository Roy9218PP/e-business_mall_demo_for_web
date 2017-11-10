import CryptoJS from 'crypto-js'

export default function(sourceData){
    var temp = '';
    const secret = "aaaabbbbccccdddd";
    const keyHex = CryptoJS.enc.Utf8.parse(secret);
    console.log(sourceData)
    
    return  CryptoJS.AES.encrypt(sourceData,keyHex,{
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    }).toString() ;


    /*
    for (var key in sourceData) {
        if (sourceData.hasOwnProperty(key)) {
          
            console.log(sourceData[key])

            temp[key] = CryptoJS.AES.encrypt(sourceData[key],secret).toString() ;
            
        }
    }

    return temp
    */
}