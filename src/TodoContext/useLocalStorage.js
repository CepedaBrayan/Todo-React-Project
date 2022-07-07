import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState();
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  let parsedItem;
  const localStorageItem = localStorage.getItem(itemName);
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }
  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newTodos) => {
    try {
      setItem(newTodos);
      localStorage.setItem(itemName, JSON.stringify(newTodos));
    } catch (error) {
      setError(error.message);
    }
  };

  return { item, saveItem, error, loading };
}

export { useLocalStorage };
