/*
	Elementos que ajudam na verificação:
		HTML:
			required, max, min, disabled
		CSS:
			:valid,:disabled,:invalid,:required,:optional

	CSS tem a propriedade ::selection que altera quando um texto é selecionado

	No JS:
		No elementos:
			checkValidity(), setCustomValidity(mensagem a exibir)

	Para alterar estilos:
		element.style.estilos = "..."
		ex: .style.backgroundColor

	Document: title, URL, body, forms["form"]

	querySelectorAll e querySelector -> sobre o CSS - precisa passar os "#" ou "."

	Altera as propriedades por meio dos "."

	Exemplo de inserção:
		    var x = document.createElement("STYLE");
		    var t = document.createTextNode("body {font: 20px verdana;}");
		    x.appendChild(t);
		    document.head.appendChild(x);

		    Outro

		    var para = document.createElement("p");
			var node = document.createTextNode("This is new."); 
			para.appendChild(node); -> faz isso porque ele é tipo text
			var element = document.getElementById("div1");
			element.appendChild(para); OU insertBefore

	setInterval(intervalo) x setTimeout(quanto tempo para inicializar)
	Ambos passam (funcao, tempo)
		
	onmousedown > onmouseup > onclick

	pode-se usar o onload no body

	addEventListener("quando",evento) e removeEventListener
		Para IE antes do 8: attachEvent e detachEvent

*/