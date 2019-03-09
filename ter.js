var war = require('colors');
var req = require('request');
var rea = require('readline');

//warnanya cok

war.setTheme({
   merah : 'red',
   kuning : 'yellow',
   hijau : 'green',
   biru : 'blue'
})

console.log("_   _           _   _____")
console.log("| | | | __ _ ___| |_|_   _|__ _ __")
console.log("| |_| |/ _` / __| '_ \| |/ _ \ '__|")
console.log("|  _  | (_| \__ \ | | | |  __/ |")
console.log("|_| |_|\__,_|___/_| |_|_|\___|_|")
console.log("")
console.log("<><><><><><><><><><><><><><><><><><>")
console.log(" Creadby : root@M3e.X")
console.log(" Team    : Attack Of Cyber")
console.log(" Tools   : HashTer")
console.log("<><><><><><><><><><><><><><><><><><>")

const bau = rea.createInterface ({
    input : process.stdin,
    output: process.stdout
})
bau.question('Enter words : ', (tol) => {
// ---------- start ----------
req('https://indosec.web.id/api/ultra_hash.php/?action=enc&value=' 
+ `${tol}`, function (error, response, body){
    ultra = JSON.parse(body)
    if (response.statusCode == 200) {
        console.log("Your words : " + `${tol}`.merah)
        console.log("your results : ")  
        console.log(" MD2       : " + 
ultra["data"]["md2"].kuning)
        console.log(" MD4       : " + 
ultra["data"]["md4"].kuning)
        console.log(" MD5       : " + 
ultra["data"]["md5"].kuning)
        console.log(" SHA1      : " + 
ultra["data"]["sha1"].hijau)
        console.log(" SHA256    : " + 
ultra["data"]["sha256"].hijau)
        console.log(" SHA384    : " + 
ultra["data"]["sha384"].hijau )
        console.log(" SHA512    : " + 
ultra["data"]["sha512"].hijau)
        console.log(" RIPEMD128 : " + 
ultra["data"]["ripemd128"].biru )
        console.log(" RIPEMD160 : " + 
ultra["data"]["ripemd160"].biru )
        console.log(" RIPEMD256 : " + 
ultra["data"]["ripemd256"].biru )
        console.log(" RIPEMD320 : " + 
ultra["data"]["ripemd320"].biru )
        console.log(" WHIRLPOOL : " + 
ultra["data"]["whirlpool"].merah)
    }else if (response.statusCode == 502) {
        console.log("Cek Your Connection ! ")
    }else {
        console.log("Uppss.... TryAgain")
    }
    bau.close()
})
})
