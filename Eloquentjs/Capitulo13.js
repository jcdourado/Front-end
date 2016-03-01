/*
	DOM: Representação do documento - Document Object Model
	Para cada caixa HTML podemos interagir: pegar textos, tags

	document: var global
		documentElement: se refere à tag html

	document.documentElement -> raiz do documento
	
	Cada nó tem a propriedade nodeType:
		1 - ELEMENT_NODE
		3 - TEXT_NODE
		8 - COMMENT_NODE

	Todo no tem:
		parentNode, firstChild, lastChild, previousSibling, nextSibling
			// Dá null caso nao tenha!
		nodeValue: texto do nó
		getElementsByTagName, getElementById, getElementsByClassName
		removeChild, appendChild, insertBefore, replaceChild
		createTextNode, createElement
		getAttribute, setAttribute
		offsetWidth, offsetHeight: altura e largura em pixels
		clientWidth, clientHeight: espaço dentro, sem contar a borda
		getBoundingClientRect: pegar a posicao
		pageXOffset, pageYOffset: X,Y na tela
	
	Alterar por estilo:
		style - acessar os elementos de estilo

	querySelectorAll e querySelector

	requestAnimationFrame - solicitar ao navegador para fazer a animação

	
	Comparar tipos:
		type of -> retorna object (mesmo sendo um outro objeto), ou array, ou string, ou integer
		.constructor -> retorna o construtor mesmo

	Variaveis de escopo global:
		Pode ser sem o "var"
		Definifidas dentros de ifs, etc
		Em funcoes, elas viram locais, a nao ser sem o "var"

	Nao tem classes, apenas funcoes
	Funcoes assim: function funcao(){} dentro dos objetos, sao funcoes privadas, e nao tem acesso as vars privadas,
	Funcoes assim: var g = function(){} sao privadas mas tem acesso a vars internas

	Metodo: apply(body,args) e call(elemento,args)
	

*/