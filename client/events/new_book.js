Template.newBook.events({
    'submit #new-book-form':function(e,t){
        e.preventDefault();
        
        var title = t.find('input[name=title]').value,
        description=t.find('textarea[name=description]').value,
        price   = t.find('input[name=price]').value,
        sale_rent=t.find('input[name=sale_rent]').value;
        
        errors = [];
        
        if(!title) errors.push("Please enter the book title.");
        if(!description) errors.push("Please write something about this book.");
        
        if(errors.length>0){
            Session.set('errors',errors);
            return false;
        }
        
        Books.insert({title:title,description:description,postedBy:Meteor.userId(),price:price,sale_rent:sale_rent},function(e,m){
            
            if(e){
                errors.push(e.reason);
                Session.set('errors',errors);
                return false;
            } 
            
            Router.go('book',{_id:m});
        });
    }
})