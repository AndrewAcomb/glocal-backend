var jsondata = require('./data.json');
var chicagocategorytree = require('./chicagocategorytree.json')



var jsonreccomendations;

var jsonfilter = {
    minrating: 1,
    maxnoratings: 100,
    maxprice: 1,
    night_owl: true,
    categories = [],
    gem: true
}

function filterMinRating(minrating, locations) {

    var filteredlocations = [];

     locations.forEach(function(location){

        if(location.rating >= minrating)
        {
            filteredlocations.push(location)
        }
             
     });

     return filteredlocations;

}

function filterMaxPrice(maxprice, locations) {

    var filteredlocations = [];

     locations.forEach(function(location){



        if (location.price){
            
            var price = location.price.length;

        }
        else{
            var price = 0;
        }
            

        if(price <= maxprice)
        {
            filteredlocations.push(location)
        }
             
     });

     return filteredlocations;

}

function filterMaxNoReviews(maxnoreviews, locations) {

    var filteredlocations = [];

     locations.forEach(function(location){

        if(location.review_count <= maxnoreviews)
        {
            filteredlocations.push(location)
        }
             
     });

     return filteredlocations;

}

function filterMinNoReviews(minnoreviews, locations) {

    var filteredlocations = [];

     locations.forEach(function(location){

        if(location.review_count >= minnoreviews)
        {
            filteredlocations.push(location)
        }
             
     });

     return filteredlocations;

}

function filterNonMidnight(locations){

    var overnight = false;
    var filteredlocations = [];

     locations.forEach(function(location){

        if(location.hours == undefined){
            
            //Locations like parks have no hours, so valid overnight
            overnight = true;
        }
        else{

            location.hours[0].open.forEach(function(day){

                if(day.is_overnight){overnight = true;}

            });
        }

            if(overnight){filteredlocations.push(location);}
            overnight = false;
           
     });

     return filteredlocations;
}



function breakParent(parents){

    var children = [];

    parents.forEach(function (parent) {
        
        if(chicagocategorytree[parent] != null){
            
            for (const child of chicagocategorytree[parent].entries()) {

                children.push(child)
            }
        }
    })

    return children;
    
}

function addCategories(){
    
    
    
}

function isDict(v) {
    return typeof v==='object' && v!==null && !(v instanceof Array) && !(v instanceof Date);
}

console.log(filterNonMidnight(jsondata))
//console.log(jsondata[0].hours[0].open)

