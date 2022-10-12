// var randomnum1=Math.floor((Math.random()*7)+1);
for(var i=0;i<7;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function (){
       
        // this.style.color="white";
        var btn=this.innerHTML;
        switch(btn){
            case "w":
                var snare=new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "a":
                var kick=new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
            case "s":
                var tom4=new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "d":
                var tom3=new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "j":
                var crash=new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "k":
                var tom1=new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "l":
                var tom2=new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            default:
        }
        buttonanimate(btn);
    });
    
}
document.addEventListener("keydown",function(event){
    switch(event.key){
        case 'w':
            var snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case 'a':
            var kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case 's':
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "d":
            var tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "j":
            var crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "l":
            var tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        default:
    }
    buttonanimate(event.key);
});
function buttonanimate(currentkey){
    var activebtn=document.querySelector("."+currentkey);
    activebtn.classList.add("pressed");
    setTimeout(function() {
        activebtn.classList.remove("pressed");
    }, 200);
}