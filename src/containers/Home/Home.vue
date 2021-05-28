<template>
  <div class="container">
    <Backdrop :isShow="isLoading">
      <Spinner></Spinner>
    </Backdrop>
    <Add></Add>
    <List></List>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Add from './Add/Add';
  import List from './List/List';
  import Backdrop from '../../components/UI/Backdrop/Backdrop';
  import Spinner from '../../components/UI/Spinner/Spinner';

  export default {
    components: { Add, List, Backdrop, Spinner },
    name: "Home",
    computed: {
      ...mapState({
        isLoading: state => state.todo.isLoading
      })
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    justify-content: space-between;

    @include small-screen {
      flex-direction: column;
    }
  }
</style>
