function somar (numero1, numero2){
    return numero1 + numero2
};
//somar(6,2)
//function subtrair(numero1, numero2){
  //  return numero1 - numero2

//};
//subtrair(8, 5)
//function multiplicar(numero1, numero2){
  //  return numero1 * numero2

//};
//multiplicar(3, 4)
//function dividir(numero1, numero2){
  //  return numero1 / numero2

//};
//dividir(12, 3)

//function calculadora (numero1, numero2, somar) {
  //  somar(numero1, numero2);
//}
//calculadora(6, 2, somar)
//
//let calculadora = (numeroA, numeroB, operacao) => operacao(numeroA, numeroB);

//console.log(calculadora(6, 2, somar))

function adicionarHttp(url){

    return "http://"+url;
 
 }
 
 function processar(lista,funcao){
 
  let preretorno=[];
 
  for(x of lista){
 
   preretorno.push(funcao(x))
 
   }
 
    return preretorno;
 
 }