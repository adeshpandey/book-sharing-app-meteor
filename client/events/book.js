Template.book.events({
    'click #buy-book-btn':function(e,t){
        Session.set('open-buy',true);
        
    }
});
Template.buy.events({
    'click #buy-btn':function(e,t){
        e.preventDefault();
        
        var mobile = t.find('input[name=mobile]').value,
        address    = t.find('input[name=address]').value,
        book       = Template.parentData(1)._id;
        
        errors = [];
          
          if(!mobile){
              errors.push("Please provide your mobile.");
          }
          else{
              if(mobile.length<10){
                  errors.push("Please provide valid mobile.");
              }
          }
          
          if(!address){
              errors.push("Please provide your address.");
          }
        
          if(errors.length>0){
              
              Session.set("errors",errors);
              return;
          }
          
          Meteor.call('orderBook',{mobile:mobile,address:address,bookId:book},function(e,m){
              if(e){
                  errors.push(e.reason);
                  return false;
              }
              Session.set('open-buy',false);
          });
          
    },
    'click #hidebox':function(e,t){
        e.preventDefault();
        
        Session.set('open-buy',false);
    }
})