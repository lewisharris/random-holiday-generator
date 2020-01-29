class Dest{
    constructor(city,country,image){
    this.city = city,
    this.country = country,
    this.image = image
    }
}
//add new destinations below
var destinations = [
new Dest('Hong Kong','','hong-kong'),
new Dest('Luang Prabang','Laos','luang-prabang'),
new Dest('Phnom Penh','Cambodia','phnom-penh'),
new Dest('Penang','Malaysia','penang'),
new Dest('Singapore','','singapore'),
new Dest('Sydney','Australia','sydney'),
new Dest('Hanoi','Vietnam','hanoi'),
new Dest('New York','USA','new-york'),
new Dest('London','UK','london'),
new Dest('Reykjavik','Iceland','reykjavik'),
new Dest('Toyko','Japan','tokyo'),
new Dest('Bangkok','Thailand','bangkok'),
new Dest('Hong Kong','USA','san-francisco'),
new Dest('Queenstown','New Zealand','queenstown'),
new Dest('Orlando','USA','orlando')
];

function getId(e){return document.getElementById(e)} //id shortcut
var find = getId('find');
var results = getId('results');
var result = getId('result');
var image = getId('snapshot-container');
var intro = getId('intro');
var tryAgain = getId('try-again');

function countryFinder(){
    var randomiser = Math.floor(Math.random()*destinations.length);
    var city = destinations[randomiser].city;
    var country = destinations[randomiser].country;
    if(destinations[randomiser].country == ''){
        result.innerHTML = city.toUpperCase();
    }
    else{
        result.innerHTML = city.toUpperCase() + ', ' + destinations[randomiser].country;
    }
    intro.className = 'hide';
    image.style.backgroundImage = "url('images/" + destinations[randomiser].image + ".jpeg')";
    results.style.opacity = 1;
    results.style.visibility = 'visible';
    tryAgain.innerHTML = 'Don\'t fancy ' + city + '?';
};



find.addEventListener('click',countryFinder);
tryAgain.addEventListener('click', countryFinder);
