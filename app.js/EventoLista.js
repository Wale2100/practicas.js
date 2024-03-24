const LIST_ITEMS = document.getElementsByTagName( "li")[0];

LIST_ITEMS.addEventListener("mouseover", () => {
    LIST_ITEMS.textContent = LIST_ITEMS.textContent.toUpperCase();
});

LIST_ITEMS.addEventListener("mouseout", () => {
    LIST_ITEMS.textContent = LIST_ITEMS.textContent.toLowerCase();
});