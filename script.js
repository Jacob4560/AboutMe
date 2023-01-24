window.addEventListener("load", function () { 
   
    const menu = document.getElementById("menu");
    
    // Add index listeners to main page
    Array.from(document.getElementsByClassName("item"))
        .forEach((item, index) => {
            item.onmouseover = () => {
                menu.setAttribute("activeIndex", index);
            }
        });
        
    const container = document.getElementById("container");
    
    // Add index listeners to main page
    Array.from(document.getElementsByClassName("storyimg"))
        .forEach((item, index) => {
            item.onmouseover = () => {
                container.setAttribute("shrink", 1);
                container.setAttribute("activeIndex", index);
            }
            item.onmouseout = () => {
                container.setAttribute("shrink", 0);
            }
        });
    
    Array.from(document.getElementsByClassName("storyimg"))
        .forEach((item, index) => {
            item.onmouseover = () => {
                container.setAttribute("shrink", 1);
                container.setAttribute("activeIndex", index);
            }
            item.onmouseout = () => {
                container.setAttribute("shrink", 0);
            }
        });
    
    
});

