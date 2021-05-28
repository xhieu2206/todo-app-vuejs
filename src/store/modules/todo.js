import Todo from '../../services/Todo';
import { ADD_TODO_START, ADD_TODO_SUCCESS, LOAD_TODOS_START, LOAD_TODOS_SUCCESS, TOGGLE_CHECKED_STATUS, REMOVE_TODOS_START, REMOVE_TODOS_SUCCESS, UPDATE_TODO_START, UPDATE_TODO_SUCCESS, REMOVE_TODO_START, REMOVE_TODO_SUCCESS } from '../mutation-types';

const state = () => ({
  todos: [],
  isLoading: false,
  errors: []
});

const getters = {

};

const actions = {
  async addTodoAsync({ commit }, item) {
    const todoInstance = new Todo();
    commit({
      type: ADD_TODO_START
    });
    const result = await todoInstance.addItem(item);
    commit({
      type: ADD_TODO_SUCCESS,
      items: result
    });
  },

  async loadTodoAsync({ commit }, searchTerm = '') {
    const todoInstance = new Todo();
    commit({
      type: LOAD_TODOS_START
    });
    const result = await todoInstance.getItems(searchTerm);
    commit({
      type: LOAD_TODOS_SUCCESS,
      items: result
    });
  },

  async removeTodosAsync({ commit, state }) {
    const todoInstance = new Todo();
    commit({
      type: REMOVE_TODOS_START
    });
    const result = await todoInstance.removeItems(state.todos);
    commit({
      type: LOAD_TODOS_SUCCESS,
      items: result
    });
  },

  async removeTodoAsync({ commit }, id) {
    const todoInstance = new Todo();
    commit({
      type: REMOVE_TODO_START
    });
    const result = await todoInstance.removeItem(id);
    commit({
      type: REMOVE_TODO_SUCCESS,
      items: result
    });
  },

  async updateTodoAsync({ commit }, todo) {
    const todoInstance = new Todo();
    commit({
      type: UPDATE_TODO_START
    });
    const result = await todoInstance.updateItem(todo);
    commit({
      type: UPDATE_TODO_SUCCESS,
      items: result
    })
  }
}

const mutations = {
  [ADD_TODO_START](state) {
    state.isLoading = true;
  },
  [ADD_TODO_SUCCESS](state, payload) {
    state.isLoading = false;
    state.todos = payload.items.map(item => {
      return {
        ...item,
        checked: false
      }
    });
  },
  [LOAD_TODOS_START](state) {
    state.isLoading = true;
  },
  [LOAD_TODOS_SUCCESS](state, payload) {
    state.isLoading = false;
    state.todos = payload.items.map(item => {
      return {
        ...item,
        checked: false
      }
    });
  },
  [TOGGLE_CHECKED_STATUS](state, payload) {
    state.todos = state.todos.map(todo => {
      if (todo.id !== payload.id) {
        return todo;
      } else {
        return {
          ...todo,
          checked: payload.status
        }
      }
    });
  },
  [REMOVE_TODOS_START](state) {
    state.isLoading = true;
  },
  [REMOVE_TODOS_SUCCESS](state, payload) {
    state.isLoading = false;
    state.todos = payload.items.map(item => {
      return {
        ...item,
        checked: false
      }
    });
  },
  [UPDATE_TODO_START](state) {
    state.isLoading = true;
  },
  [UPDATE_TODO_SUCCESS](state, payload) {
    state.isLoading = false;
    state.todos = payload.items.map(item => {
      return {
        ...item,
        checked: false
      }
    });
  },
  [REMOVE_TODO_START](state) {
    state.isLoading = true;
  },
  [REMOVE_TODO_SUCCESS](state, payload) {
    state.isLoading = false;
    state.todos = payload.items.map(item => {
      return {
        ...item,
        checked: false
      }
    });
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
