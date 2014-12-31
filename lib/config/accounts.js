if(Meteor.isServer){
    Accounts.config({
        sendVerificationEmail :true
    }); 
}
if(Meteor.isClient){
    Accounts.onResetPasswordLink(function(token,done){
        if(token){
            Session.set('reset-token',token);    
        }
        
    });    
}
