const quoteSelector=document.querySelector('.quote');

const authorSelector=document.querySelector('.author')

const generatequote=document.querySelector('button')

api_url ='https://qapi.vercel.app/api/random'

const generateQuote= async()=>{
   const response= await  fetch(api_url);
   const {id,quote,author}=await response.json();
   quoteSelector.textContent=quote;
   authorSelector.textContent=author;
   console.log(quote);
}

generatequote.addEventListener('mouseover',generateQuote);
