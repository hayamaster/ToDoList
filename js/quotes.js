const quotes = [
    {
        quote: "Some people dream of success, while other people get up every morning and make it happen.",
        author: "Wayne huizenga"
    },
    {
        quote: "You will never be who want to be, until you are happy with who you are.",
        author: "Thomas F.Shubnell"
    },
    {
        quote: "A little consideration, a little thought for others, makes all the difference.",
        author: "Winnie the pooh"
    },
    {
        quote: "Nothing can dim the light which shines from within.",
        author: "Maya angelou"
    },
    {
        quote: "I never dreamed about success, I worked for it",
        author: "Estee Lauder"
    },
    {
        quote: "Do not try to be original, just try to be good",
        author: "Paul Rand"
    },
    {
        quote: "Do not be afraid to give up the good to go for the great",
        author: "John D.Rockefeller"
    },
    {
        quote: "The only thing worse than starting something and failing...is not starting something.",
        author: "Seth Godin"
    },
    {
        quote: "If you really want to do something, you'll find a way. If you do not, you'll find an excuse.",
        author: "Jim Rohn"
    },
    {
        quote: "You are a very loving person and your life will be filled with romance.",
        author: "Snoopy"
    }
];

const quote = document.querySelector("#quotes p:first-child");
const author = document.querySelector("#quotes p:last-child");

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = randomQuote.quote;
author.innerText = randomQuote.author;