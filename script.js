const quotes = [
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "Strive not to be a success, but rather to be of value. - Albert Einstein"
  ];
  
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById('quote-text');
    const newQuote = quotes[randomIndex];
  
  
    quoteElement.style.transform = 'rotateY(360deg)';
    setTimeout(() => {
      quoteElement.style.transform = 'rotateY(0deg)';
      quoteElement.innerHTML = `<div class="neon">
                                  <span class="text" data-text="${newQuote}">${newQuote}</span>
                                  <span class="gradient"></span>
                                  <span class="spotlight"></span>
                                </div>`;
    }, 1000);
  
  
    changeBackground();
  }
  
  function changeBackground() {
    const backgrounds = [
      'https://bit.ly/48SnDBS',
      'https://bit.ly/495rjje',
      'https://bit.ly/3vTZ09r',
      'https://bit.ly/3Om2LLb',
      'https://bit.ly/42crgQJ',
      'https://bit.ly/48L5wOa',
      'https://bit.ly/3UhjEdN'
    ];
  
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    document.body.style.backgroundImage = `url('${backgrounds[randomIndex]}')`;
  }
  
  function shareOnTwitter() {
    const currentQuote = document.querySelector('.neon .text').textContent;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(currentQuote)}`;
    window.open(twitterUrl, '_blank');
  }
  
  