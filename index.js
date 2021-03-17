
let userScore = 0;
let sheldonScore = 0;
let rounds = 0;


const btns = document.querySelectorAll(".btn");
//console.log(btns);


const userText = document.getElementById("player");
const sheldonText = document.getElementById("sheldon");


function getChoice(){
    const vals = [
        "rock", "paper","scissors","lizard", "spock"
    ];

    const sh_imgs = [
        document.getElementById('sh-rock'),
        document.getElementById('sh-paper'),
        document.getElementById('sh-scissors'),
        document.getElementById('sh-lizard'),
        document.getElementById('sh-spock')
    ]

    const randomIdx = Math.floor(Math.random() * vals.length);
    return [vals[randomIdx], sh_imgs[randomIdx]];
}    



btns.forEach(val =>{
    val.addEventListener("click",(e)=>{


        const userChoice = e.target.id;
        console.log("User Choice: ",userChoice);
        const [sheldonsChoice, sheldonImg] = getChoice()
        console.log("Sheldons Choice",sheldonsChoice);
        console.log(sheldonImg);

        switch(userChoice){
            case "rock":
                if(sheldonsChoice===userChoice){
                    rounds++;
                }
                else if(sheldonsChoice==='lizard' || sheldonsChoice==='scissors'){
                    userScore++;
                    rounds++;
                }
                else{
                    sheldonScore++;
                    rounds++;
                }
                break;
            case "paper":
                if(sheldonsChoice===userChoice){
                    rounds++;
                }
                else if(sheldonsChoice==='rock' || sheldonsChoice==='spock'){
                    userScore++;
                    rounds++;
                }
                else{
                    sheldonScore++;
                    rounds++;
                }
                break;
            case "scissors":
                if(sheldonsChoice===userChoice){
                    rounds++;
                }
                else if(sheldonsChoice==='paper' || sheldonsChoice==='lizard'){
                    userScore++;
                    rounds++;
                }
                else{
                    sheldonScore++;
                    rounds++;
                }
                break;
            case "lizard":
                if(sheldonsChoice===userChoice){
                    rounds++;
                }
                else if(sheldonsChoice==='spock' || sheldonsChoice==='paper'){
                    userScore++;
                    rounds++;
                }
                else{
                    sheldonScore++;
                    rounds++;
                }
                break;
            case "spock":
                if(sheldonsChoice===userChoice){
                    rounds++;
                }
                else if(sheldonsChoice==='rock' || sheldonsChoice==='scissors'){
                    userScore++;
                    rounds++;
                }
                else{
                    sheldonScore++;
                    rounds++;
                }
                break;

        }
        console.log("User Score: ",userScore);
        console.log("Sheldons Score: ", sheldonScore);
        console.log("rounds: ",rounds);
        userText.innerHTML = userScore;
        sheldonText.innerHTML = sheldonScore;
        
        sheldonImg.classList.add("shle");
        setInterval(()=>{
            sheldonImg.classList.remove("shle")
        }, 3000)
        if(rounds>5){
            if(sheldonScore>userScore){
                alert("Sheldon wins refresh to play again");
            }
            else if(userScore>sheldonScore){
                alert("You win!!!! refresh to play again");
            }
            else if(userScore === sheldonScore){
                alert("its a tie!! refresh to play again");
            }
        }
    })
})

