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