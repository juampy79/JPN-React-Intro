import React from "react";

function useLocalStorage(itemName, initialItems){

    const localStorageItems = localStorage.getItem(itemName);

    let parsedItems;
    if (!localStorageItems) {
        localStorage.setItem(itemName, JSON.stringify(initialItems));
        parsedItems = initialItems
    } else {
        parsedItems = JSON.parse(localStorageItems);
    }

    const [items, setItems] = React.useState(parsedItems);

    const saveItems = (items) => {
        localStorage.setItem(itemName, JSON.stringify(items));
        setItems(items)
    }
    return [items, saveItems];
}

export { useLocalStorage };