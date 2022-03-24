const sceltagiocatore = prompt ("Vuoi giocare a dadi? Digita ok se vuoi giocare");

if (sceltagiocatore=="ok"){

    const sceltaComputer = Math.floor(Math.random() * 7);
    const scelta1 = parseInt(sceltaComputer);
    console.log(`Il tuo numero è: ${scelta1}`);
    const sceltaComputer2 = Math.floor(Math.random() * 7);
    const scelta2 = parseInt(sceltaComputer2);
    console.log(`Il numero del Computer è: ${scelta2}`);

    if (scelta1 > scelta2){
        console.log("hai vinto");
    }else {
        console.log("hai perso");
    }
}