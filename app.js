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
new Dest('San Francisco','USA','san-francisco'),
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


document.getElementById('find').addEventListener('click',loadCountries);

document.getElementById('try-again').addEventListener('click', loadCountries);

function loadCountries(){
    var request = new XMLHttpRequest();
    request.open('GET','https://restcountries.eu/rest/v2/all/', true);
    request.onload = () => {
        if(request.status == 200){
            intro.className = 'hide';
            results.style.opacity = 1;
            results.style.visibility = 'visible';
            var data = JSON.parse(request.responseText);
            var random = Math.floor(Math.random()* data.length)
            var city =  data[random].capital;
            var country =  data[random].name;
            var flag = data[random].flag;
            if(city == ''){
                result.innerHTML = country.toUpperCase();
            }
            else{
                result.innerHTML = `${city.toUpperCase()}, ${country}`
            }
            image.style.backgroundImage = `url(${flag})`
            tryAgain.innerHTML = 'Don\'t fancy ' + city + '?';
        }
    }
    request.send();
}



