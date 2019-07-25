var destinations = [
    {city:'Hong Kong',
    country:'',
    continent:'asia',
    weather:'hot',
    environment:'city',
    reason:'culture',
    budget:'not-fussed',
    image:'hong-kong'
    },
    {city:'Luang Prabang',
    country:'Laos',
    continent:'asia',
    weather:'hot',
    environment:'outdoors',
    reason:'culture',
    budget:'cheap',
    image:'luang-prabang'
    },
    {city:'Phnom Penh',
    country:'Cambodia',
    continent:'asia',
    weather:'hot',
    environment:'city',
    reason:'culture',
    budget:'cheap',
    image:'phnom-penh'
    },
    {city:'Penang',
    country:'Malaysia',
    continent:'asia',
    weather:'hot',
    environment:'city',
    reason:'culture',
    budget:'cheap',
    image:'penang'
    },
    {city:'Singapore',
    country:'',
    continent:'asia',
    weather:'hot',
    environment:'city',
    reason:'culture',
    budget:'expensive',
    image:'singapore'
    },
    {city:'Sydney',
    country:'Australia',
    continent:'pacific',
    weather:'dont-care',
    environment:'city',
    reason:'culture',
    budget:'expensive',
    image:'sydney'
    },
    {city:'Hanoi',
    country:'Vietnam',
    continent:'asia',
    weather:'dont-care',
    environment:'city',
    reason:'culture',
    budget:'cheap',
    image:'hanoi'
    },
    {city:'New York',
    country:'USA',
    continent:'America',
    weather:'dont-care',
    environment:'city',
    reason:'culture',
    budget:'expensive',
    image:'new-york'
    },
    {city:'London',
    country:'UK',
    continent:'europe',
    weather:'dont-care',
    environment:'city',
    reason:'culture',
    budget:'expensive',
    image:'london'
    },
    {city:'Tokyo',
    country:'Japan',
    continent:'asia',
    weather:'dont-care',
    environment:'city',
    reason:'culture',
    budget:'expensive',
    image:'tokyo'
    },
    {city:'Rekyjavik',
    country:'Iceland',
    continent:'europe',
    weather:'cold',
    environment:'outdoors',
    reason:'adventure',
    budget:'expensive',
    image:'rekyjavik'
    },
    {city:'Bangkok',
    country:'Thailand',
    continent:'asia',
    weather:'hot',
    environment:'city',
    reason:'culture',
    budget:'cheap',
    image:'bangkok'
    },
    {city:'San Francisco',
    country:'USA',
    continent:'america',
    weather:'dont-care',
    environment:'city',
    reason:'city',
    budget:'expensive',
    image:'san-francisco'
    },
    {city:'Queenstown',
    country:'New Zealand',
    continent:'pacific',
    weather:'dont-care',
    environment:'outdoors',
    reason:'adventure',
    budget:'expensive',
    image:'queenstown'
    },
    {city:'Orlando',
    country:'USA',
    continent:'america',
    weather:'hot',
    environment:'outdoors',
    reason:'adventure',
    budget:'expensive',
    image:'orlando'
    }
];

var continentPicker = 'pacific';
var find = document.getElementById('find');
var landingFind = document.getElementById('landing-find');
var results = document.getElementById('results');
var result = document.getElementById('result');
var image = document.getElementById('snapshot-container');
var details = document.getElementById('details');
var intro = document.getElementById('intro');
var about = document.getElementById('about');
var tryAgain = document.getElementById('try-again');

// Country access
var randomiser = Math.floor(Math.random()*destinations.length);
var city = destinations[randomiser].city;
var country = destinations[randomiser].country;


function countryFinder(){
    if(destinations[randomiser].country == ''){
        result.innerHTML = city.toUpperCase();
    }
    else{
        result.innerHTML = city.toUpperCase() + ', ' + destinations[randomiser].country;
    }
    intro.style.display = 'none';
    image.style.backgroundImage = "url('images/" + destinations[randomiser].image + ".jpeg')";
    results.style.opacity = 1;
    results.style.visibility = 'visible';
    about.style.height = '100vh';
};



find.addEventListener('click',countryFinder);

tryAgain.innerHTML = 'Don\'t fancy ' + city + '?';
