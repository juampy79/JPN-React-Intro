import React from "react";

function useLocalStorage(itemName, initialItems) {
    const [items, setItems] = React.useState(initialItems);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
            setTimeout(() => {
                try {
                    let parsedItems;

                    const localStorageItems = localStorage.getItem(itemName);
                    if (!localStorageItems) {
                        localStorage.setItem(itemName, JSON.stringify(initialItems));
                        parsedItems = initialItems;
                    } else {
                        parsedItems = JSON.parse(localStorageItems);
                    }
                    setItems(parsedItems)
                    setLoading(false);
                } catch (e) {
                    setLoading(false);
                    setError(true);
                }
            }, 1000)
        }, []
    )

    const saveItems = (items) => {
        localStorage.setItem(itemName, JSON.stringify(items));
        setItems(items)
    }
    return {items, saveItems, loading, error};
}

export {useLocalStorage};