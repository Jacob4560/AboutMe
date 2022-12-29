window.addEventListener("load", function () { 
   
    const menu = document.getElementById("menu");
    
    Array.from(document.getElementsByClassName("item"))
        .forEach((item, index) => {
            item.onmouseover = () => {
                menu.setAttribute("activeIndex", index);
                console.log(menu.activeIndex);
            }
        });
    
});

