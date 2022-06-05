let cinema = "CinePop"
console.log(cinema)

let catalogo = [
 {
     id: 001,
     titulo: "Batman Begins",
     Duração: 1.30,
     Ator: "Cristian Bale",
     AnoLaçamento: 2005,
     cartaz: false
 },
 {
    id: 002,
    titulo: "Batman O Cavaleiro das trevas",
    Duração: 1.30,
    Ator: "Cristian Bale",
    AnoLaçamento: 2008,
    cartaz: true

 }
]
function adicionarFilme(novoFilme){
catalogo.push({
  id: 003,
  titulo: "Batman O Cavaleiro das trevas ressurge",
  Duração: 1.30,
  Ator: "Cristian Bale",
  AnoLaçamento: 2012,
  cartaz: true})
  return adicionarFilme

}
adicionarFilme()
console.log(catalogo)

let listaDeFilmes = ["batman begins", "batman o cavaleiro das trevas", "batman o cavaleiro das trevas ressurge"]
function buscarFilme (indiceDoFilme){
  console.log(listaDeFilmes[1])
  
 
    
}

console.log(buscarFilme(002))



