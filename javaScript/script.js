var series = ["https://m.media-amazon.com/images/M/MV5BODNiODVmYjItM2MyMC00ZWQyLTgyMGYtNzJjMmVmZTY2OTJjXkEyXkFqcGdeQXVyNzk3NDUzNTc@._V1_UX182_CR0,0,182,268_AL_.jpg ", "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY268_CR0,0,182,268_AL_.jpgg ", "https://m.media-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_UX182_CR0,0,182,268_AL_.jpg ", "https://m.media-amazon.com/images/M/MV5BYTM5MDg3MGMtODAyYy00MGQ0LWJhM2MtZDFmMjAzNTFhZGRmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY268_CR4,0,182,268_AL_.jpg"];
var nomesDasSeries = ["Falcão e Soldado Invernal", "Friends", "Stranger Things", "Cidade Invisível"];
var sinopseDasSeries = ["Após os eventos de Vingadores: Ultimato, Sam Wilson/Falcão (Anthony Mackie) e Bucky Barnes/Soldado Invernal (Sebastian Stan) se juntam em uma aventura global que testa suas habilidades - e sua paciência - na série do Marvel Studios Falcão e Soldado Invernal","Ross, Rachel, Mônica, Chandler, Joey e Phoebe formam um grupo de seis amigos que lutam para se sobressair e progredir na competitiva vida de Manhattan. Seu humor inteligente e apoio mútuo incondicional fazem com sua amizade seja cada vez mais forte, superando assim todos os obstáculos que a vida lhes apresenta.", "A trama acontece na cidade fictícia de Hawkins, no início da década de 80. Como é de costume, o jovem Will Byers (Noah Schnap) se diverte com amigos durante uma partida de Dungeon & Dragons, um famoso jogo de RPG de mesa da época. Após o término da partida, o garoto vai embora de bicicleta, sozinho, à noite, e desaparece. Começa então uma busca incansável por parte de toda a população da pequena cidade, que se vê completamente abalada com esse acontecimento", "Em Cidade Invisível, um mundo subterrâneo é habitado por criaturas míticas evoluídas de uma linhagem profunda do folclore brasileiro. Em um período conturbado, o detetive Eric (Marco Pigossi) se encontra preso em uma investigação de assassinato que o coloca no meio de uma batalha entre esses dois mundos"]

for (var i = 0; i < 1; i++){  
  var serieEscolhida = parseInt(prompt("Qual série você quer saber mais? 1 (Falcão e Soldado Invernal), 2 (Friends), 3 (Stranger Things), 4 (Cidade Invisível)"))

  serieEscolhida = serieEscolhida - 1
  i = serieEscolhida
  if (i < series.length){
  document.write("<img src=" + series[i] + ">")
  document.write("<h2>" + nomesDasSeries[i] + "</h2>")
  document.write("<h3>"+ sinopseDasSeries[i] + "</h3>")  
} else if(i > serieEscolhida - 1){
    document.write("<h2>"+ " Opção Inválida" + "</h2>")
    break
  }
}



