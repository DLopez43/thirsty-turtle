const tracker= document.getElementById('goal-tracker');
//const hydration = document.getElementById('hydration-container')
const fourOz= document.getElementById('1');
const eightOz= document.getElementById('2');
const twelveOz= document.getElementById('3');
const sixteenOz= document.getElementById('4');
const twentyOz= document.getElementById('5');
const userInput = document.getElementById('option');
let userGoal = 0;
let currentTime = new Date();
userInput.addEventListener("change", function(){
    userGoal = Number(this.value)
    console.log(userGoal);
});

//userGoal  = userInput.value;
// const userGoal = userInput.addEventListener('change', function(event){
//     const userGoal = Number(`${this.value}`)
//     //console.log(userGoal)
//     return userGoal;
// });

//console.log(userGoal);

//addEventListner on click to change the color
//function handleSelectChange(event) {
 // const currentValue = event.target.value;
 // console.log(currentValue);
//}

//Hydration

let remainingOz = userGoal;
//function to update Water Display
 let waterIntake = 0;
function waterDisplay(ounces){
   if(waterIntake >= userGoal){
    alert('🐢🐢🐢 You did it! See you again tomorrow. 🐢🐢🐢');
    reset()
    return;
   }
    waterIntake += ounces;
    remainingOz -= ounces;
    //update display with percent 
    let percent = Math.floor((waterIntake/userGoal) * 100);
    tracker.style.borderRadius = '40px';
    //tracker.style.backgroundColor = 'blue';
     tracker.style.backgroundImage = "url('assets/reflective-water.jpg')";
    //  tracker.style.zIndex='9999';
    tracker.style.width =`${percent}%`;
    tracker.style.height= "100%";
    tracker.innerHTML =`🐢${percent}%`;
    
   
    
}
//addEventListner on click to update the tracker
// fourOz.addEventListener("click",(event)=>{
    
//         console.log(userGoal)
//         waterDisplay(4)
//       //Increment counter based on 
//       //Move display to match  
// })

function reset(){
     waterIntake = 0;
     remainingOz = userGoal;
     
     tracker.style.width = '0%';
     tracker.style.backgroundImage = 'none';
     tracker.innerHTML =`🐢 0%`;



   //  waterDisplay(ounces);
     
   // if(currentTime.getHours === 4 & currentTime.getMinutes === 7 ){
        
//}
}
//Tracks the ounces intake
//function responds to specific els
// function waterChoices ( size ){
// userclicked = one of the size
// }
document.addEventListener("click",(event)=>{
    if(event.target === fourOz){
        console.log(4)
        waterDisplay(4)
      //Increment counter based on 
      //Move display to match  
    }
    if(event.target === eightOz){
        waterDisplay(8)
    }
    if(event.target === twelveOz){
         waterDisplay(12)
    }
    if(event.target === sixteenOz){
         waterDisplay(16)
    }

    if(event.target === twentyOz){
         waterDisplay(20)

    }
})