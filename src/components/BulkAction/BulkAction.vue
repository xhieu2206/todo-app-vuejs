<template>
  <transition name="slide-fade">
    <div v-if="isDisplay" class="bulk-action-container">
      <div class="todo-name">
        <label>Bulk Action:</label>
      </div>

      <div class="todo-action-buttons">
        <Button :btnType="'info'" :size="'small'">Done</Button>
        <Button :btnType="'danger'" :size="'small'" @on-button-click="onRemoveButtonClickedHandler">Remove</Button>
      </div>
    </div>
  </transition>
</template>

<script>
  import { mapActions } from 'vuex';
  import Button from '../UI/Button/Button';

  export default {
    components: { Button },
    props: {
      isDisplay: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      ...mapActions({
        removeTodos: 'todo/removeTodosAsync'
      }),
      onRemoveButtonClickedHandler: function() {
        this.removeTodos();
      }
    }
  }
</script>

<style lang="scss" scoped>
  .bulk-action-container {
    position: absolute;
    width: inherit;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    padding-left: 2em;
    background-color: #E0E0E0;

    .todo-name {
      flex-basis: 65%;
      display: flex;
      align-items: center;

      label {
        font-weight: bold;
      }
    }

    .todo-action-buttons {
      flex-basis: 35%;
      display: flex;
      justify-content: space-between;
    }
  }
</style>
