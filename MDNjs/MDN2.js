/*
	Intl -> API para intercionalização do JS

	() == ${}

	localStorage = escopo que armazena até o final da sessão
	sessionStorage
--

	RegExp: tem o construtor RegRex e o literal
		O conteudo vem entre /.. /
		Procura por uma string em um texto

		Chars especiais: 
			* -> /ab*c/ -> Um "a" com 0 ou n "b", seguido pelo "c"
			\ -> inverte de o proximo caracter entre especial vs literais -> /a\*/ -> anula o efeito do *
/*			^ -> acha para o inicio -> /^a/
			$ -> acha para o final -> /$a/
			+ -> acha o caracter 1 ou mais vezes -> /a+/
			. -> acha o caracter exceto se ele for o começo da linha -> \.n\
			("..") -> acha e guarda a string dentro do ()
			(?:"..") -> acha e nao guarda
			".."(?="..") -> acha apenas se o primeiro caracter for seguido pelo segundo
			".."(?!"..") -> acha apenas se o primeiro caracter nao for seguido pelo segundo
			".."|".." -> acha um ou o outro
			".."{numero} -> acha no minimo essa quantidade de caracteres
			".."{num1,num2} -> encontra no minimo o num1 e no maximo num2
			[".."] -> tenta achar algo desse conjunto.
			[^".."] -> nega o que tem dentro (ignora)
			\d -> digito
			\D -> Nao digito
			\w -> encontra qualquer alfa numerico
			\W -> procura por nao alfa numericos
			\0 -> procura por NULL

		metodos: exec e test
			Para String: match, replace, search, split
*/