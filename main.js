var gameDiv = document.getElementsByClassName('game')[0];
var imgList = [1,2,3,4,5,6,7,8];


var cardOne = null
var cardTwo = null ;
var disableGame = false;

var selectedDiv = -1;
var selectedDiv_ = -1;
var disableGame = false;

var attemptCount = 0;
var matchedCards = 0;

var startTime = false;

function shuffle_array(){
    for(let i=0;i<=7;i++){
        var y = Math.floor(Math.random()*7);
        var temp = imgList[i];
        imgList[i]=imgList[y];
        imgList[y] = temp;
    }
}
function createCard(){
    shuffle_array();
    for (let i=0;i<=7;i++){
        let x = document.createElement('div');
        x.classList.add('card');
        x.id= "id-"+Math.random().toString(16).slice(2,7);
        x.innerHTML = ` <img class='question' src='images/question_mark.png'/> 
        <img  class='item item${imgList[i]}  ' src='images/img0${imgList[i]}.png' />  `;
        gameDiv.append(x);
    }
    shuffle_array();
    for (let i=0;i<=7;i++){
        let x = document.createElement('div');
        x.classList.add('card');
        x.id ="id-"+Math.random().toString(16).slice(2,7);
        x.innerHTML = ` <img class='question' src='images/question_mark.png'/> 
        <img  class='item item${imgList[i]}' src='images/img0${imgList[i]}.png' />  `;
        gameDiv.append(x);
    }
}
createCard();


document.querySelectorAll('.question').forEach((e)=>{
    e.addEventListener("click",()=>{
        if(startTime==false){
             startTime = Date.now();
            
        }

        if (selectedDiv == -1) {
            selectedDiv = e.parentElement.id; 
            document.querySelector("#" + selectedDiv + ' .question' ).style.display = "none";
            document.querySelector("#" + selectedDiv + ' .item' ).style.display = "block";
        }
        else { 
            attemptCount++;
           
            selectedDiv_ = e.parentElement.id ;
            disableGame = true;
            document.querySelector("#" + selectedDiv_ + ' .question' ).style.display = "none";
            document.querySelector("#" + selectedDiv_ + ' .item' ).style.display = "block";
            if ( document.querySelector("#" + selectedDiv + ' .item' ).classList[1]  ==  document.querySelector("#" + selectedDiv_ + " .item").classList[1]   ) {
                matchedCards++;
                if (matchedCards == 8){
                    var duration = (Date.now() -startTime )/1000;
                    alert("Wow you did it in  "+ duration+ " seconds" );
                }
                console.log('correct');
                selectedDiv = -1 ; selectedDiv_ =-1;
                
            }else{
                document.querySelector("#" + selectedDiv + ' .item' ).classList.add('shake');
                document.querySelector("#" + selectedDiv_ + ' .item' ).classList.add('shake');

                console.log('wrong');
                setTimeout(function(){
                    document.querySelector("#" + selectedDiv + ' .item' ).classList.remove('shake');
                    document.querySelector("#" + selectedDiv_ + ' .item' ).classList.remove('shake');
                    document.querySelector("#" + selectedDiv + ' .question' ).style.display = "block";
                    document.querySelector("#" + selectedDiv + ' .item' ).style.display = "none";
                    document.querySelector("#" + selectedDiv_ + ' .question' ).style.display = "block";
                    document.querySelector("#" + selectedDiv_ + ' .item' ).style.display = "none";
                    selectedDiv = -1 ; selectedDiv_ =-1;
                },1000);

                document.querySelector('.score').innerHTML =    ` <h3>  Attempt count ${attemptCount}  <br>  Mathced card deck ${matchedCards} </h3> `; 
                
            }
           
        }
        console.log(selectedDiv + ' ' +  selectedDiv_);
    });
})



// document.querySelectorAll('.question').forEach((e)=>{
//     e.addEventListener("click",()=>{
//         e.style.display = "none";
//         e.parentElement.querySelector('.item').style.display = "block";
//         if (selectedItem ==-1){
//             selectedItem = e.parentElement.querySelector('.item').classList[1];
//         }else{
//              selected_ =  e.parentElement.querySelector('.item').classList[1];
//             if (selected == selected_){
//                 console.log('correct');
//                 selected=-1;
//             }else{
//                 setTimeout(function(){
//                     e.style.display="block";
//                     document.querySelector('.'+selected).parentElement.querySelector('.question').style.display="block";
//                     e.parentElement.querySelector('.item').style.display = "none";
//                     document.querySelector('.'+selected).style.display = "none";
//                     console.log(  selected + ' != ' + selected_);
//                     selected=-1; 
//                 },100);
                 
//             }
            
//         }
        
//     })
// })
