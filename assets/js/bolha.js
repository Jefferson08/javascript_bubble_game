var timer;

var placar = 0;
var totalBolas = 0;

function addBola(){

	var bola = document.createElement("div");
	bola.setAttribute("class", "bola");

	var tamanho = Math.floor(Math.random() * (100 - 20 + 1)) + 20; //Gerando valor aleatório entre 20 e 100
	var radius = (tamanho / 2);

	var rect = document.getElementById("minha_div").getBoundingClientRect(); //Pegando a posição da div

	var px = ((Math.floor(Math.random() * 600)) + rect.left) ; // Gerando posições aleatórias onde as bolhas aparecerão
	var py = ((Math.floor(Math.random() * 400)) + rect.top); //Os valores são compatíveis com as dimensões da div

	if((px + tamanho) >= (rect.left + 600)){ //Se a bolha ultrapassar a largura da div
		px = px - tamanho;
	}

	if ((py + tamanho) >= (rect.top + 400)) { //Se a bolha ultrapassar a altura da div
		py = py - tamanho;
	}


	bola.setAttribute("style", "width: "+tamanho+"px; height: "+tamanho+"px; left: "+px+"px; top: "+py+"px; background-color: "+gera_cor()+"; border-radius: "+radius+"px");
	bola.setAttribute("onclick", "estourar(this)");

	document.getElementById("minha_div").appendChild(bola); //Adiciona a bolha na div

	totalBolas++; //Adiciona + 1 ao total de bolhas

	document.getElementById("total_bolhas").innerHTML = "Total de bolhas: " + (totalBolas); //Escreve o total de bolhas

}

function estourar(elemento){
	document.getElementById("minha_div").removeChild(elemento);
	atualizaPlacar();
}

function iniciar(){
	timer = setInterval(addBola, 500); //Define o intervalo emque as bolhas aparecerão
}

function gera_cor(){ //Retorna uma cor aleatória em hexadecimal
    var hexadecimais = '0123456789ABCDEF';

    var cor = '#';
  
    // Pega um número aleatório no array acima
    for (var i = 0; i < 6; i++ ) {
    //E concatena à variável cor
        cor += hexadecimais[Math.floor(Math.random() * 16)];
    }
    return cor;
}

function atualizaPlacar(){

	document.getElementById("estouradas").innerHTML = "Bolhas estouradas: " + (placar + 1); //Escreve o total de bolhas estouradas
	placar++; //Soma +1 ao total de bolhas estouradas

}

