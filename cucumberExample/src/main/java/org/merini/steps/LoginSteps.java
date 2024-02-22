package org.merini.steps;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class LoginSteps {

    @Given("esta na pagina de login")
    public void esta_na_pagina_de_login() {
        System.out.println("LoginSteps.Given(\"esta na pagina de login\")");
    }

    @And("usuario digita nome e senha")
    public void usuario_digita_nome_e_senha() {System.out.println("LoginSteps.And(\"usuario digita nome e senha\")");
    }

    @And("clicar no botão login")
    public void clicar_no_botão_login()
    {
        System.out.println("LoginSteps.and(\"clicar no botão login\")");
    }

    @Then("usuario e direcionado para home page")
    public void usuario_e_direcionado_para_home_page()
    {
        System.out.println("LoginSteps.usuario_e_direcionado_para_home_page");
    }
}