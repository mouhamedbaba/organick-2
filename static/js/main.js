const collapse = () =>{
    let isMenuCollapsed = localStorage.getItem("isMenuCollapsed")
    if( isMenuCollapsed === null) {
        localStorage.setItem("isMenuCollapsed", "false")
    }
    isMenuCollapsed = localStorage.getItem("isMenuCollapsed")
    console.log(isMenuCollapsed);
    let btn_menu = $("#btn-menu")
    let menu_mobile = $("#menu-mobile")

    btn_menu.click(function(e){
        e.preventDefault()
        if( isMenuCollapsed === "true") {
            localStorage.setItem("isMenuCollapsed", "false")
            menu_mobile.addClass("d-none")
            isMenuCollapsed = localStorage.getItem("isMenuCollapsed")

        } else{
            localStorage.setItem("isMenuCollapsed", "true")
            menu_mobile.removeClass("d-none")
            isMenuCollapsed = localStorage.getItem("isMenuCollapsed")

        }
    })

    $(".nav-link").click(function(e){
        localStorage.setItem("isMenuCollapsed", "false")
        isMenuCollapsed = localStorage.getItem("isMenuCollapsed")

    })

}

collapse()