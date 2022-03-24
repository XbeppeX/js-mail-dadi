let mail = ["matteo@gmail.com", "fabio@gmail.com", "pietro@gmail.com","anna@gmail.com"];
let newmail = prompt("Inserisci la tua email!");

for(let i=0; i < mail.length; i++){
    
    if (newmail == mail[i]){
        console.log("La tua email corrisponde, Benvenuto!");
        break;
    }else {
        console.log("La tua email non corrisponde");
    }
}