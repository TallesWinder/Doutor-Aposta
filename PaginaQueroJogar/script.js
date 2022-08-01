let menu_list = document.getElementById("menu-list")
menu_list.style.maxHeight = "0px" //Faz o menu de navegação desaparecer

let show_menu = () => {
  //Verifica se o menu está fechado
  if (menu_list.style.maxHeight === "0px") {

    //Habilita o menu
    menu_list.style.maxHeight = "120px"
  }

  else {
    //Faz o menu de navegação desaparecer
    menu_list.style.maxHeight = "0"
  }
}

/*Validações */
let trocar = () => {

  if (document.getElementById('email').value == "") {
    alert('Preencher o campo Email!')
  }

  else if (document.getElementById('confemail').value == "") {
    alert('Preencher o campo confirmar de Email!')
  }

  else if (document.getElementById('confemail').value != document.getElementById('email').value) {
    alert('Os Emails precisam ser iguais!')
  }

  else if (document.getElementById('name').value == "") {
    alert('Preencher campo nome!')
  }

  else if (document.getElementById('lastname').value == "") {
    alert('Preencher o campo sobrenome!')
  }

  else if (document.getElementById('aposta').value < 1 || document.getElementById('aposta').value > 8) {
    alert('Escolha o tipo de aposta!')
  }

  else if (document.getElementById('jogo').value == "") {
    alert('Qual o seu jogo?')
  }

  else if (agreement.checked != true) {
    alert('É preciso ler e aceitar os termos!')
  }

  else {
    document.getElementById('aparecer').style.display = 'block';
    document.getElementById('desaparecer').style.display = 'none';
  }
}

let botao = () => {
  document.getElementById('aparecer').style.display = 'none';
  document.getElementById('desaparecer').style.display = 'block';
}