Meteor.methods({
    'saveJob':function(post){
        post = Posts.insert(post);
        return post;
    }
})