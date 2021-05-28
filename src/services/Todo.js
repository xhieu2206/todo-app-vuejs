// Service for simutate calling API to backend server

export default class Todo {
  getItems(searchTerm) {
    if (searchTerm === '') {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(JSON.parse(localStorage.getItem('todos') || "[]"));
        }, 1000);
      });
    } else {
      const allItems = JSON.parse(localStorage.getItem('todos') || "[]");
      return new Promise(resolve => {
        setTimeout(() => {
          const items = allItems.filter(item => item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0);
          resolve(items);
        }, 100);
      });
    }
  }

  addItem(item) {
    const newItem = {
      id: Date.parse(new Date().toISOString()),
      title: item.title,
      dueDate: item.date,
      description: item.description,
      priority: item.priority
    }
    let items = JSON.parse(localStorage.getItem('todos') || "[]");
    items.push(newItem);
    items.sort((a, b) => Date.parse(a.dueDate) - Date.parse(b.dueDate));
    localStorage.setItem('todos', JSON.stringify(items));
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(items);
      }, 1000);
    });
  }

  updateItem(todo) {
    const allItems = JSON.parse(localStorage.getItem('todos') || "[]");
    const items = allItems.map(item => {
      if (item.id !== todo.id) {
        return item;
      } else {
        const updatedItem = {...todo};
        delete updatedItem.checked
        return updatedItem;
      }
    });
    items.sort((a, b) => Date.parse(a.dueDate) - Date.parse(b.dueDate));
    localStorage.setItem('todos', JSON.stringify(items));
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(items);
      }, 1000);
    });
  }

  removeItem(id) {
    const allItems = JSON.parse(localStorage.getItem('todos') || "[]");
    const items = allItems.filter(item => item.id !== id);
    localStorage.setItem('todos', JSON.stringify(items));
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(items);
      }, 1000);
    });
  }

  removeItems(todos) {
    const itemsRemoveIdsArr = todos.filter(item => item.checked === true).map(item => item.id);
    let allItems = JSON.parse(localStorage.getItem('todos') || "[]");
    const items = allItems.filter(item => itemsRemoveIdsArr.indexOf(item.id) < 0);
    localStorage.setItem('todos', JSON.stringify(items));
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(items);
      }, 1000);
    });
  }
}
