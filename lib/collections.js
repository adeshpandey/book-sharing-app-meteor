Books = new Mongo.Collection('books');
Orders= new Mongo.Collection('orders');

Books.allow({
    insert:function(userId,doc){
        return !!userId && doc.postedBy==userId && doc.title && doc.description && doc.sale_rent && doc.price;
    },
    update:function(userId,doc){
        return !!userId;
    }    
});
