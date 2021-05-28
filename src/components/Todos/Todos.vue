<template>
  <div class="todos-container">
    <Todo v-for="todo in todos" :key="todo.id" :todo="todo"></Todo>
  </div>
</template>

<script>
  import Todo from './Todo/Todo';

  export default {
    components: { Todo },
    props: {
      todos: {
        type: Array
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
