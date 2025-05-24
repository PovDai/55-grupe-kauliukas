const appDOM=document.getElementById('app');



appDOM.innerHTML=`   <div class="container">
            <div class="button-container">
        <button  class ="button" type="button">Paspaudus ridenti</button>
        <button class ="button"  type="button">Anuliuoti ridenimą</button>
            </div>
            <div class="kamuoliukai">
            </div>

            <div class="history">
      
            </div>
        </div>`

const [btnStart,btnRestart]=appDOM.querySelectorAll('button');
const kamuoliukaiDOM=appDOM.querySelector('.kamuoliukai');
const boxTextDOM=appDOM.querySelector('.box')
const historyDOM=appDOM.querySelector('.history');



btnStart.addEventListener('click',()=>{

const variacijos = [1,2,3,4,5,6];

const iskrites = variacijos[Math.floor(Math.random() * variacijos.length)];

if(kamuoliukaiDOM.children.length<6){
kamuoliukaiDOM.insertAdjacentHTML('afterbegin',`<div class="box">${iskrites}</div>`)

historyDOM.insertAdjacentHTML('afterbegin',`<div>Buvo išridenta: ${iskrites}</div>`)

}else{
    kamuoliukaiDOM.innerHTML='';
    historyDOM.innerHTML=``
}

})
btnRestart.addEventListener('click',()=>{

kamuoliukaiDOM.innerHTML=''

})







