const LIST_ITEMS = document.getElementsByTagName( "li");

for (let i = 0; i  < LIST_ITEMS.length; i += 1) {

    LIST_ITEMS[i].addEventListener("mouseover", () => {
        LIST_ITEMS[i].textContent = LIST_ITEMS[i].textContent.toUpperCase();
    });
    
    LIST_ITEMS[i].addEventListener("mouseout", () => {
        LIST_ITEMS[i].textContent = LIST_ITEMS[i].textContent.toLowerCase();
    });
    
}

