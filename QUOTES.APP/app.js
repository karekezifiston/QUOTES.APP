let btn= document.querySelector('#new-quote');
let quote= document.querySelector('.quote');
let person= document.querySelector('.person');

const quotes=[{
    quote:`"The best way to find yourself is to loose yourself in the
    service of others."`,
    person: `Mahatma Gandhi`
},{
    quote:`"If you want" to live a happy life, tie it to a goal, note 
    to people or things."`,
    person:`Alber Einstein`
},{
    quote:`"At his best, man is the noblest of all animals; separated
    from law and justice he is the worst."`,
    person:`Aristote`
},{
    quote:`"Your time is limited, so don't waste it living somone
     else's life."`,
    person:`Steven Jobs`
},{
    quote:`"Tell me and i forget. Teach me and I remember. Involve me
    and I learn."`,
    person:`Benjamin Franklin`
},{
    quote:`"If you look at what you have in life, you'll always have 
    more. if you look at what you don't have in life, you'll never
    have enough."`,
    person:`Oprah Winfrey`
},{
    quote:`"It does not matter how slowly you go as long as you do not stop."`,
    person:`Confucius`
},{
    quote:`"Our lives begin to end the day we become silent about 
    things that matters."`,
    person:`Marthin Luther King,Jr`
},{
    quote:`"Remember that not getting what you want is sometimes a
    wonderful stroke of luck."`,
    person:`Dalai Lama`
}
,{
    quote:`"The journey of a thousand miles begins with one step."`,
    person:`Lao Tzu`
}];

btn.addEventListener('click', function(){
    let random= Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})