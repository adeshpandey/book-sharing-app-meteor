Template.home.rendered = function(){
    navigator.geolocation.getCurrentPosition(function(position){
        console.log(position);
    });
}