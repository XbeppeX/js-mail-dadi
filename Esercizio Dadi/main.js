// Alert per domanda se vuoi giocare
const sceltagiocatore = prompt ("Vuoi giocare a dadi? Digita ok se vuoi giocare");

// Condizione if per scegliere numero random
if (sceltagiocatore=="ok"){

    const sceltaComputer = Math.floor(Math.random() * 6) + 1;
    console.log(`Il tuo numero è: ${sceltaComputer}`);
    const sceltaComputer2 = Math.floor(Math.random() * 6) + 1;
    console.log(`Il numero del Computer è: ${sceltaComputer2}`);

    if (sceltaComputer > sceltaComputer2){
        console.log("hai vinto");
    } else if (sceltaComputer < sceltaComputer2){
        console.log("hai perso");
    } else {
        console.log("hai pareggiato");
    }
}