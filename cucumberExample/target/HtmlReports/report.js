$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/test/resources/features/login.feature");
formatter.feature({
  "name": "Feature para testar a funcionalidade de login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verificar se login esta ok com credenciais corretas",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "esta na pagina de login",
  "keyword": "Given "
});
formatter.match({
  "location": "org.merini.steps.LoginSteps.esta_na_pagina_de_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usuario digita nome e senha",
  "keyword": "And "
});
formatter.match({
  "location": "org.merini.steps.LoginSteps.usuario_digita_nome_e_senha()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicar no botão login",
  "keyword": "And "
});
formatter.match({
  "location": "org.merini.steps.LoginSteps.clicar_no_botão_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "usuario e direcionado para home page",
  "keyword": "Then "
});
formatter.match({
  "location": "org.merini.steps.LoginSteps.usuario_e_direcionado_para_home_page()"
});
formatter.result({
  "status": "passed"
});
});