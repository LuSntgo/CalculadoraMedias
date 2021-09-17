function notaFinal(){
  let nome = document.querySelector('#nome').value;
  let primeiraNota = Number(document.querySelector('#primeiraNota').value);
  let segundaNota = Number(document.querySelector('#segundaNota').value);
  let terceiraNota = Number(document.querySelector('#terceiraNota').value);
  let quartaNota = Number(document.querySelector('#quartaNota').value);
  let classificacao = '';
    
   if(nome !== '' && primeiraNota != '' && segundaNota != '' && terceiraNota != '' && quartaNota != ''){
   const media = ((primeiraNota + segundaNota + terceiraNota + quartaNota)/4);
   let nota = media.toFixed(1);
  
     
  if(nota >= 7){
  classificacao = 'Aprovadx!';
  } else {
  classificacao = 'Reprovadx'
  }
     
     document.querySelector('.resultado').innerHTML = "Bem vindx " + nome + ", sua média foi: " + nota + ". Você está " + classificacao ; 
   }
    
   }  
  