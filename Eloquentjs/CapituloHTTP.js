/*
	Query string : string com o que foi o header

	XMLHttpRequest: forma como o JS faz requisicoes (nada haver com XML)

	Exemplo de requisicao:
		var req = new XMLHttpRequest();
		req.open("GET", "example/data.txt", false);
		req.send(null);
		console.log(req.responseText);

	open, send, status, statusText
	
	se for false, o send só retorna depois da resposta
	se for true, o codigo continua

	Fazer um mecanismo de load com eventListener para saber quando carregou

	Quando o recurso recebido pelo objeto XMLHttpRequest é um documento XML,
	a propriedade responseXML do objeto irá conter uma representação dele

	Para JSON: JSON.parse(...)

	Access-Control-Allow-Origin: * - Servidores o incluem para permitir 
	que os Script façam requisicoes a sites externos

	promises: encapsular uma acao assincrona em um objeto:
		promisejs.org - biblioteca

	HTTPS : seguro, o server precisa de um certificado de uma organização certificadora

	
*/