Template.commentForm.events({
    'submit #comments-form':function(e,t){
        e.preventDefault();
        
        var comment = t.find('textarea[name=comment_body]').value;
        
        book = Books.findOne({_id:Template.parentData(1)._id});
        
        comments = book.comments!=undefined?book.comments:[];
        
        comments.push({title:comment,user:Meteor.user().profile.name,userId:Meteor.userId(),updated_date : Date.now()});
        
        Books.update({_id:book._id},{$set:{"comments":comments}});
    }
})