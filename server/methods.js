Meteor.methods({
    'getCouponDunia' : function(){
        var deals = HTTP.call("GET","http://www.couponraja.in/top-coupons");
        return deals.content;
    },
    'getLocation':function(){
       // var ipdb = new IPInfoDB({'apiKey':null});
        var ip = this.connection.clientAddress;
        
        IPInfoDB.setIP(ip);
        IPInfoDB.getLocation();
    },
    'orderBook':function(orderItem){
        orderItem = _.extend(orderItem,{userId:Meteor.userId(),userName:Meteor.user().profile.name,order_time:Date.now()});
        
        var id = Orders.insert(orderItem);
        return id;
    }
})