Template.book.helpers({
    'notOwner':function(val){
        return val!=Meteor.userId();
    },
    'buyOpened':function(){
        return Session.get('open-buy') || false;
    }
})