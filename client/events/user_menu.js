Template.userMenu.events({
    'click .logout-btn':function(e,t){
        Meteor.logout(function(err){
            if(err){
                errors = [e.reason];
                Session.set('errors',errors);
            }
        })
    }
})