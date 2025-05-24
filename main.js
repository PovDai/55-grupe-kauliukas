const appDOM=document.getElementById('app');



appDOM.innerHTML=`   <div class="container">
            <div class="button-container">
        <button  class ="button" type="button">Paspaudus ridenti</button>
        <button class ="button"  type="button">Anuliuoti ridenimą</button>
            </div>
            <div class="kamuoliukai">
            </div>
            <div class="history">
            <div class="p">Empty space</div>  
            </div>
        </div>`

const [btnStart,btnRestart]=appDOM.querySelectorAll('button');
const kamuoliukaiDOM=appDOM.querySelector('.kamuoliukai');
const boxTextDOM=appDOM.querySelector('.box')
const historyDOM=appDOM.querySelector('.history');
const pDOM=appDOM.querySelector('.p')

pDOM.textContent='';

btnStart.addEventListener('click',()=>{

const variacijos = [1,2,3,4,5,6];

const iskrites = variacijos[Math.floor(Math.random() * variacijos.length)];

if(kamuoliukaiDOM.children.length<6){
kamuoliukaiDOM.insertAdjacentHTML('afterbegin',`<div class="box">${iskrites}</div>`)

pDOM.textContent=`Išridenta: ${iskrites}`+ pDOM.textContent
}else{
    kamuoliukaiDOM.innerHTML='';
    pDOM.textContent='';
}

})
btnRestart.addEventListener('click',()=>{

kamuoliukaiDOM.innerHTML=''
pDOM.textContent='';

})







