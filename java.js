var res = document.getElementById('result');

function check (form) {
    let result = 0;
    let one, two, three, four, five, six = " ";

    if(document.getElementById('correctAnswersOne').checked){
        queOne = true;
        result++;
        one = " ";
    } else {
       one =  document.getElementById('result').innerText = " 1";
    }
    
    if(document.getElementById('correctAnswersTwo').checked){
        queTwo = true;
        result++;
        two = " ";
    } else {
        two =  document.getElementById('result').innerText = " 2";
     }
    
    if(document.getElementById('correctAnswersThree').checked){
        queThree = true;
        result++;
        three = " ";
    } else {
        three =  document.getElementById('result').innerText = " 3";
     }
    
    if(document.getElementById('correctAnswersFour').checked){
        queFour = true;
        result++;
        four = " ";
    } else {
        four =  document.getElementById('result').innerText = " 4";
     }
    
    if(document.getElementById('correctAnswersFive').checked){
        queFive = true;
        result++;
        five = " ";
    } else {
        five =  document.getElementById('result').innerText = " 5";
     }
    
    if(document.getElementById('correctAnswersSix').checked){
        queSix = true;
        result++;
        six = " ";
    }else {
        six =  document.getElementById('result').innerText = " 6";
     }

     
    result = Math.round(result/6*100);

    if(result==100){
        document.getElementById('result').innerText = result + "%\n" + "You have no mistakes!";
    } else if(result==0){
        document.getElementById('result').innerText = result + "%\n" + "Maybe think again?";
    } else {
        document.getElementById('result').innerText = result + "%\n" + "You made a mistake in:" + one + two + three + four + five + six;
    }
    console.log("uwu");
}
// let resetBtn = document.getElementById("resetBtn");

// resetBtn.addEventListener("click", ()=>{
//     console.log("uwu");
//     res.style.display = 'none';
// })