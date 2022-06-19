const quotes = [
    {
        quotes: "The greatest day in your life and mine is when we take total responsibility for our attitudes. That's the day we truly grow up.",
        author: "John C. Maxwell",
    },
    {
        quotes: "Life is not a problem to be solved, but a reality to be experienced.",
        author: "Soren Kierkegaard",
    },
    {
        quotes: "What we think determines what happens to us, so if we want to change our lives, we need to stretch our minds.",
        author: "Wayne Dyer",
    },
    {
        quotes: "Life is ten percent what happens to you and ninety percent how you respond to it.",
        author: "Lou Holtz",
    },
    {
        quotes: "Believe that life is worth living and your belief will help create the fact.",
        author: "William James",
    },
    {
        quotes: "The only disability in life is a bad attitude.",
        author: "Scott Hamilton",
    },
    {
        quotes: "Too often we underestimate the power of a touch, a smile, a kind word, a listening ear, an honest compliment, or the smallest act of caring, all of which have the potential to turn a life around.",
        author: "Leo Buscaglia",
    },
    {
        quotes: "Life isn't about finding yourself. Life is about creating yourself.",
        author: "George Bernard Shaw",
    },
    {
        quotes: "There is more to life than increasing its speed.",
        author: "Mahatma Gandhi",
    },
    {
        quotes: "Life is really simple, but we insist on making it complicated.",
        author: "Confucius",
    },
    {
        quotes: "Our prime purpose in this life is to help others. And if you can't help them, at least don't hurt them.",
        author: "Dalai Lama",
    },
];

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todayQuote.quotes}"`;
author.innerText = `- ${todayQuote.author} -`;