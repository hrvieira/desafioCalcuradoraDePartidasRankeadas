let user = "Harry Potter"
let victory = 27
let defeat = 10

let hero = [user, victory, defeat]

function rankedBalance(victory, defeat) {
  let balance = victory - defeat
  return balance
}

let score = rankedBalance(victory, defeat)

let nivel

if (score < 10) {
nivel = "Ferro"
} else if (score >= 11 && score <= 20) {
  nivel = "Bronze"
} else if (score >= 21 && score <= 50) {
  nivel = "Prata"
} else if (score >= 51 && score <= 80) {
  nivel = "Ouro"
} else if (score >= 81 && score <= 90) {
  nivel = "Diamante"
} else if (score >= 91 && score <= 100) {
  nivel = "Lendário"
} else if (score >= 101) {
  nivel = "Imortal"
}

console.log(hero)
console.log(`O Herói ${user}, tem um saldo de ${score} e está no nível ${nivel}.`)