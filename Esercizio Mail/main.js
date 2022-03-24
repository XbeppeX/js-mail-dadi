//creazioni array
let mail = ["matteo@gmail.com", "fabio@gmail.com", "pietro@gmail.com","anna@gmail.com"];
let newmail = prompt("Inserisci la tua email!");

// if con ".includes" per check in lista
if (mail.includes(newmail)){
    console.log("La tua email corrisponde, Benvenuto!");
}else {

    console.log("La tua email non corrisponde");

    //inserimento email ad array
    const risposta = prompt("Vuoi inserire la tua email alla lista ?");

    if (risposta == "si") {
        mail.push(newmail);
        console.log(mail);
    } else if (risposta == "no") {
        console.log("Nessun problema, grazie comunque");
    }
    
}


