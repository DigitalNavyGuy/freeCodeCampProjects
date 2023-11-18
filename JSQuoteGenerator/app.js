// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let author = document.querySelector('.author');

const quotes =[{
    quote: `"The best way to find yourself is to lose yourself in the service of others."`,
    author: ` Mahatma Gandhi`
}, {
    quote: `"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
    author: ` Nelson Mandela`
}, {
    quote: `"The future belongs to those who believe in the beauty of their dreams."`,
    author: ` Eleanor Roosevelt`
}, {
    quote: `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."`,
    author: ` Oprah Winfrey`
}, {
    quote: `"Well done is better than well said."`,
    author: ` Benjamin Franklin`
}, {
    quote: `"It is during our darkest moments that we must focus to see the light."`,
    author: ` Aristotle`
}, {
    quote: `"Be yourself; everyone else is already taken."`,
    author: ` Oscar Wilde`
}, {
    quote: `"You will face many defeats in life, but never let yourself be defeated."`,
    author: ` Maya Angelou`
}, {
    quote: `"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose."`,
    author: ` Dr. Seuss`
}, {
    quote: `"The only impossible journey is the one you never begin."`,
    author: ` Tony Robbins`
}, {
    quote: `"Winners are not people who never fail, but people who never quit."`,
    author: ` Edwin Louis Cole`
},];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
})