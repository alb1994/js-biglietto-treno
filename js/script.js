//prompt km
let chilometri = parseInt(prompt("inserisci i chilomentri da percorrere"));
//prompt ceta
let eta = parseInt(prompt("inserisci la tua eta"));
// variabile km*21
let costo_provvisorio = chilometri * 0.21;
//condizionali
if(eta < 18) {
    risultato_scontato = costo_provvisorio * (20 / 100);
    risultato_nf = costo_provvisorio - risultato_scontato;
}
else if(eta > 65) {
    risultato_scontato = costo_provvisorio * (40 / 100);
    risultato_nf = costo_provvisorio - risultato_scontato;
}
else if(eta <= 65){
    risultato_scontato = costo_provvisorio * (0 / 100);
    risultato_nf = costo_provvisorio - risultato_scontato;
}
else if(eta >= 18){
    risultato_scontato = costo_provvisorio * (0 / 100);
    risultato_nf = costo_provvisorio - risultato_scontato;
}

let risultato = risultato_nf.toFixed(2)
//video
document.getElementById("ris_vid").innerHTML = risultato;