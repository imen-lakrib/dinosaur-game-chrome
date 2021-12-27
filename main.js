// add elements from html to a const or var
const dino= document.querySelector('.dino')
const cactu= document.querySelector('.cactu')
let score = document.querySelector('#score')

let result = -1

function jump(){
    if(dino.classList != 'dinoJump'){
        dino.classList.add('dinoJump')
        setTimeout(function(){
            dino.classList.remove('dinoJump')
        },300)
    }
    forward()
    
}
function forward(){
    cactu.classList.add('cactuForward')
    result++
    score.textContent = result

}

document.addEventListener('keyup', function(e){jump()})

// check dino
let isAlive = setInterval(function(){
    // dino y position
    let dinotop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    // cactu x position
    let cactuleft = parseInt(window.getComputedStyle(cactu).getPropertyValue("left"))
    //
    if (cactuleft<50 && cactuleft > 0 && dinotop >=140 ){
        alert('game over your score is : '+ result)



    }
    
    

},10)










