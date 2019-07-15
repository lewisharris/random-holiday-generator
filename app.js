var destinations = [
    {city:'Hanoi',
    country:'Vietnam',
    continent:'Asia',
    environment:'city',
    reason:'culture',
    budget:'cheap'
    },
    {city:'New York',
    country:'USA',
    continent:'America',
    environment:'city',
    reason:'culture',
    budget:'expensive'
    },
    {city:'London',
    country:'UK',
    continent:'europe',
    environment:'city',
    reason:'culture',
    budget:'expensive'
    },
    {city:'Tokyo',
    country:'Japan',
    continent:'Asia',
    environment:'city',
    reason:'culture',
    budget:'expensive'
    },
    {city:'Reykjavik',
    country:'Iceland',
    continent:'europe',
    environment:'outdoors',
    reason:'adventure',
    budget:'expensive'
    },
    {city:'Bangkok',
    country:'Thailand',
    continent:'asia',
    environment:'city',
    reason:'culture',
    budget:'cheap',
    info:'The city is huge'
    },
    {city:'Birmingham',
    country:'UK',
    continent:'europe',
    environment:'city',
    reason:'culture',
    budget:'average',
    }
];


var budget = document.getElementsByName('budget');

for(i=0;i<budget.length; i++){
    if(budget[i].value == 'average'){
        console.log(budget[i].value + ' logged')
    }
}
function search(){
        for(i=0;i<destinations.length; i++){
             if(destinations[i].value === 'expensive'){
                  console.log(destinations[i].city);
                }
            };
};


//Random destination selector
var randomiser = destinations[Math.floor(Math.random()*destinations.length)];



//Final Results
const result = document.getElementById('result');  
const details = document.getElementById('details');
result.innerHTML = randomiser.city + ',' + randomiser.country;
details.innerHTML = result.innerHTML + ' is in ' + randomiser.continent + " " +randomiser.info;
