const Eris = require("eris");
var x5bzteam = new Eris("NTI1MjI4NzYxMDc2MDcyNDQ4.DvzmgQ.WC1Eu_f_xU-WdPGjYu4ekFzZdNU");
x5bzteam.on("ready", () => {
    console.log("Yo! Changer [ON]");
    onstart();
});
x5bz = "522818978532294713";
nick = "! ᴹᴬᶠᴵᴬ |AhmadBR";
function onstart(){
    var v1 = nick.split('');
    var counter;
    var i=0;
var x5bz2 = ' ';
  var x5bz3 =   setInterval(function(){
     
     if (i == v1.length){
     clearInterval(x5bz3);
     onstart()
      return;
     }
     var v2 = v1[i];
    x5bz2 += v2;
    x5bzteam.editNickname(x5bz, x5bz2);
 
        i++;
   
     }, 1000);
}
x5bzteam.connect();
