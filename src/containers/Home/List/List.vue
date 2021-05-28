<template>
  <div class="list-container border">
    <Header>List</Header>
    <Input @on-change="value => searchTerm = value" :value="searchTerm" :placeholder="'Search ...'"></Input>
    <Todos :todos="todos"></Todos>
    <BulkAction :isDisplay="isBulkActionDisplay"></BulkAction>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import Header from '../../../components/UI/Header/Header';
  import Input from '../../../components/UI/Input/Input';
  import Todos from '../../../components/Todos/Todos';
  import BulkAction from '../../../components/BulkAction/BulkAction';

  export default {
    namne: 'List',
    components: { Header, Input, Todos, BulkAction },
    data() {
      return {
        searchTerm: '',
        isBulkActionDisplay: false
      }
    },
    async created() {
      await this.loadTodos(this.searchTerm);
    },
    methods: {
      ...mapActions({
        loadTodos: 'todo/loadTodoAsync'
      })
    },
    computed: {
      ...mapState({
        todos: state => state.todo.todos
      })
    },
    watch: {
      todos: function(to) {
        this.isBulkActionDisplay = false;
        to.forEach(todo => {
          if (todo.checked) {
            this.isBulkActionDisplay = true;
          }
        });
      },
      searchTerm: async function(to) {
        await this.loadTodos(this.searchTerm);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .list-container {
    flex-basis: 55%;
    position: relative;
  }
</style>
