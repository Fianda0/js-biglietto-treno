const prezzoKm = 0.21

const kmPercorsi = prompt('inserire chilomerti da percorrere')
console.log('i chilometri percorsi sono ' + kmPercorsi)
document.getElementById('km').innerHTML = kmPercorsi

const eta = prompt('Inserire la tua eta`:')
console.log('la tua eta` e` ' + eta)
document.getElementById('anni').innerHTML = (`${eta} anni`)

let prezzoFinale = kmPercorsi * prezzoKm
console.log('il costo e` di ' + prezzoFinale)

if (eta < 18) {
    prezzoFinale = prezzoFinale - (prezzoFinale * 20 / 100)
} else if (eta > 65) {
    prezzoFinale = prezzoFinale - (prezzoFinale * 40 / 100)
}

console.log('il costo e` di ' + prezzoFinale)
document.getElementById('costo').innerHTML = (`${prezzoFinale.toFixed(2)} €`)
