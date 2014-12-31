var requireLogin = function() {
if (! Meteor.user()) {
this.render('accounts');
} else {
this.next();
}
}

var isResetLink = function(){
    if(Session.get('reset-token')){
        this.render('accounts');
    }
    else{
        this.next();
    }
}
Router.configure({
layoutTemplate: 'layout',
loadingTemplate: 'loading',
notFoundTemplate: 'notFound',
waitOn:function(){
    return Meteor.subscribe('books');
}
});

Router.route('/',{name:'home',template:'books'});

Router.route('books',{name:'books'});
Router.route('new-book',{name:'new-book'});
Router.route('book/:_id',{name:'book',data:function(){return Books.findOne({_id:this.params._id})}});

Router.onBeforeAction(isResetLink, {only : ['home']});
Router.onBeforeAction(requireLogin, {except : ['home','reset-password']});