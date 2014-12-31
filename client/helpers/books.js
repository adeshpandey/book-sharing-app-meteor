Template.books.helpers({
    'books':function(){
        return Books.find({postedBy:{$ne:Meteor.userId()}});
    },
    'totalBooks':function(){
        var counts  = Books.find({postedBy:{$ne:Meteor.userId()}}).count();
        return counts>1?counts+" Books ":counts+" Book " ;
    }
})