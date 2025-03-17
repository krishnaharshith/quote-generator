const quoteSelector=document.querySelector('.quote');

const authorSelector=document.querySelector('.author')

const generatequote=document.querySelector('button')

api_url ='https://qapi.vercel.app/api/random'
async function getdata(){
const response=await fetch(api_url);
const data=await response.json()
console.log(quoteSelector.textContent);
console.log(quoteSelector.innerHTML);
console.log(quoteSelector.innerText)
quoteSelector.textContent=''
authorSelector.textContent='';
quoteSelector.insertAdjacentText("beforeend",`"${data.quote}"`)
authorSelector.insertAdjacentText("beforeend",`-${data.author}`)
}

generatequote.addEventListener('click',getdata)

