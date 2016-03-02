/*
	Expressao regular é um objeto, criado por RegExp ou um valor literal(entre barras)

	metodos: 
		test


	Date: conta a partir de 0
		new - cria com a data atual
		getTime: pega desde 1970
		(ano,mes,dia,hora,minuto,seg,miliseg)

	Nao pode usar o new com o Math

	JS nao tem classes, apenas objetos
	Tudo herda de objeto
	Trabalha atraves de heranca de prototipos

	Pode-se chamar o construtor de outra classe atraves do call dentro do construtor

	Object.create - cria uma copia

	Object.defineProperty(objeto, 'atributo', { implementacao}):
	
		Object.defineProperty(cachorro, 'idade', {
		  value: 1,
		  get: funtion() {
		    // já que cada ano de um cachorro é equivalente a 7 anos nossos
		    return idade * 7
		  },
		  set: function(value) {
		    idade = value
		  }
		})
*/