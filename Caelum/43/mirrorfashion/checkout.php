<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Checkout Mirror Fashion</title>
  <link rel="stylesheet" href="css/bootstrap.css">
  <meta name="viewport" content="width=device-width">
</head>
<style>
.navbar {
  margin: 0;
}
body{
	padding-top: 70px;
}
</style>
<body>

<nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="navbar-header">
    <a class="navbar-brand" href="index.php">Mirror Fashion</a>
    <button class="navbar-toggle" type="button"
	    data-target=".navbar-collapse" data-toggle="collapse">
	  <span class="glyphicon glyphicon-align-justify"></span>
	</button>
  </div>
  <ul class="nav navbar-nav collapse navbar-collapse">
    <li><a href="sobre.php">Sobre</a></li>
    <li><a href="#">Ajuda</a></li>
    <li><a href="#">Perguntas frequentes</a></li>
    <li><a href="#">Entre em contato</a></li>
  </ul>
</nav>

<div class="jumbotron">
  <div class="container">

  <h1>Ótima escolha!</h1>
  <p>Obrigado por comprar na Mirror Fashion! 
  Preencha seus dados para efetivar a compra.</p>
  
  <div class="container">
  	<div class="row">
  	  <div class="col-sm-4">
		  <div class="panel panel-default">

			  <div class="panel-heading">
			    <h2 class="panel-title">Sua compra</h2>
			  </div><!-- fim .panel-heading -->

				  <div class="panel-body">
					<img src="img/produtos/foto1-<?= $_POST["cor"] ?>.png" class="img-thumbnail img-responsive hidden-xs">
				  	<dl>
					    <dt>Produto</dt>
					    <dd><?= $_POST["nome"] ?></dd>
					    <dt>Preço</dt>
					    <dd id="preco"><?= $_POST["preco"] ?></dd>
					    <dt>Cor</dt>
					    <dd><?= $_POST["cor"] ?></dd>
					    <dt>Tamanho</dt>
					    <dd><?= $_POST["tamanho"] ?></dd>
					  </dl>

					  <div class="form-group">
					    <label for="qt">Quantidade</label>
					    <input id="qt" class="form-control" type="number" min="0" max="99"
					      value="1">
					  </div>
					  <div class="form-group">
					    <label for="total">Total</label>
					    <output for="qt valor" id="total" class="form-control">
					      <?= $_POST["preco"] ?>
					    </output>
					  </div>
					</div>
				  </div>
		  </div>

	  <div class="col-sm-8">

	  <form >
	  	<div class="row">
		<fieldset class="col-md-6">
		  <legend>Dados pessoais</legend>

		  <div class="form-group">
		    <label for="nome">Nome completo</label>
		    <input type="text" class="form-control" id="nome" name="nome" autofocus required>
		  </div>

		  <div class="form-group">
		    <label for="email">Email</label>
		    <input type="email" class="form-control" id="email" name="email" placeholder="email@example.com">  
		  </div>

		  <div class="form-group">
		    <label for="cpf">CPF</label>
		    <input type="text" class="form-control" id="cpf" name="cpf" placeholder="000.000.000-00" required>
		  </div>

		  <div class="checkbox">
		    <label>
		      <input type="checkbox" value="sim" name="spam" checked>
		      Quero receber spam da Mirror Fashion
		    </label>
		  </div>
		</fieldset>

	    <fieldset class="col-md-6">
	        <legend>Cartão de crédito</legend>
			<div class="form-group">
			    <label for="numero-cartao">Número - CVV</label>
			    <input type="text" class="form-control" 
			           id="numero-cartao" name="numero-cartao">
			  </div>

			  <div class="form-group">
			    <label for="bandeira-cartao">Bandeira</label>
			    <select name="bandeira-cartao" id="bandeira-cartao"
			        class="form-control">
			      <option value="master">MasterCard</option>
			      <option value="visa">VISA</option>
			      <option value="amex">American Express</option>
			    </select>
			  </div>

			  <div class="form-group">
			    <label for="validade-cartao">Validade</label>
			    <input type="month" class="form-control" 
			           id="validade-cartao" name="validade-cartao">
			  </div>
	    </fieldset>
		</div>
	    <button type="submit" class="btn btn-primary pull-right btn-lg">
	      <span class="glyphicon glyphicon-thumbs-up"></span>
	      Confirmar Pedido
	    </button>
	</form>
   </div>
  </div>
 </div>
</div>

<script src="js/jquery.js"></script>
<script src="js/bootstrap.js"></script>
<script src="js/converteMoeda.js"></script>
<script src="js/testaConversao.js"></script>
<script src="js/total.js"></script>

</body>
</html>