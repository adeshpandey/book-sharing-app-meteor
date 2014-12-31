// Write your package code here!
IPInfoDB = {};

IPInfoDB.setKey = function(val){
    IPInfoDB.apiKey = val;
}

IPInfoDB.setIP=  function(val){
        IPInfoDB.ip = val;
    };
IPInfoDB.getLocation = function(){
        console.log(this.ip);
    };
