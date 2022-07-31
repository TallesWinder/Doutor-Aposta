let menu_list = document.getElementById("menu-list")
    menu_list.style.maxHeight = "0px"

    let show_menu = () => {
        if(menu_list.style.maxHeight === "0px"){
        menu_list.style.maxHeight = "120px"}
    
    else {
        menu_list.style.maxHeight = "0"
    }
}