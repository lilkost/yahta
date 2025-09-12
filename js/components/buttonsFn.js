export const handleClick = () =>{
    const handleClickChangeClassEl = (el, className, params) => {
        switch(params){
            case "add":
                el.classList.add(className);
                break;
            case "remove":
                el.classList.remove(className);
                break;
            case "toggle":
                el.classList.toggle(className);
                break;
            default:
                break;
        }
    }

    const burgerNode = document.querySelector(".header__burger"),
        menuTopNode = document.querySelector(".header-menu"),
        accordionNode = document.querySelectorAll(".qustion__accordion"),
        menuItemNode = document.querySelectorAll(".navigation__link");

    if(burgerNode && menuTopNode) burgerNode.addEventListener("click", ()=>{
        handleClickChangeClassEl(menuTopNode, "is-open", "toggle");
        handleClickChangeClassEl(burgerNode, "is-active", "toggle");
    });

    if(accordionNode) {
        accordionNode.forEach(el=>{
            const clickNode = el.querySelector(".qustion__top");
            clickNode.addEventListener("click", ()=>handleClickChangeClassEl(el, "is-open", "toggle"));
        });
    }

    if(menuItemNode) {
        menuItemNode.forEach(item=>{
            item.addEventListener("click",()=>{
                handleClickChangeClassEl(menuTopNode, "is-open", "toggle");
                handleClickChangeClassEl(burgerNode, "is-active", "toggle");
            });
        })
    }
}

