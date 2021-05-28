<template>
  <div class="todo-container">
    <div class="todo-header">
      <div class="todo-name">
        <div>
          <input type="checkbox" :checked="todo.checked" @change="onCheckedHandler($event)"/>
        </div>
        <label>{{ todo.title }}</label>
      </div>

      <div class="todo-action-buttons">
        <Button :btnType="'info'" :size="'small'" @on-button-click="isDisplayUpdateForm = !isDisplayUpdateForm">Details</Button>
        <Button :btnType="'danger'" :size="'small'" @on-button-click="onClickedRemoveButtonHandler">Remove</Button>
      </div>
    </div>

    <transition name="slide-fade">
      <div v-if="isDisplayUpdateForm" class="todo-update-form">
        <Input
          :isValidated="title.isValidated"
          :value="title.value"
          :placeholder="'Add new task...'"
          @on-change="(value) => title.value = value.trim()">
        </Input>
        <Textarea :value="description" @on-change="(value) => description = value">Description</Textarea>
        <div class="form-groups">
          <DatePicker :value="date" @on-change-date="(value) => date = value"></DatePicker>
          <Select :value="priority" @on-change="(value) => priority = value"></Select>
        </div>
        <Button :type="'success'" @on-button-click="submittedHandler">Update</Button>
      </div>
    </transition>
  </div>
</template>

<script>
  import { mapActions, mapMutations } from 'vuex';
  import { TOGGLE_CHECKED_STATUS } from '../../../store/mutation-types';
  import Input from '../../UI/Input/Input.vue';
  import Button from '../../UI/Button/Button.vue';
  import Textarea from '../../UI/Textarea/Textarea';
  import DatePicker from '../../UI/DatePicker/DatePicker';
  import Select from '../../UI/Select/Select';

  export default {
    components: { Input, Button, Textarea, DatePicker, Select },
    props: {
      todo: {
        type: Object,
        require: true,
      }
    },
    data() {
      return {
        isDisplayForm: false,
        title: {
          value: this.todo.title,
          isValidated: true
        },
        description: this.todo.description,
        date: this.todo.dueDate,
        priority: this.todo.priority,
        isDisplayUpdateForm: false
      }
    },
    methods: {
      ...mapActions({
        updateTodo: 'todo/updateTodoAsync',
        removeTodo: 'todo/removeTodoAsync'
      }),
      ...mapMutations('todo', [TOGGLE_CHECKED_STATUS]),
      submittedHandler: async function() {
        if (this.title.value === '') {
          this.title.isValidated = false;
        } else {
          this.title.isValidated = true;
          await this.updateTodo({
            id: this.todo.id,
            title: this.title.value,
            date: this.date,
            description: this.description,
            priority: this.priority
          });
          this.isDisplayUpdateForm = false;
        }
      },
      onCheckedHandler: function(e) {
        this.TOGGLE_CHECKED_STATUS({
          id: this.todo.id,
          status: e.target.checked
        })
      },
      onClickedRemoveButtonHandler: function() {
        this.removeTodo(this.todo.id);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .todo-container {
    width: 90%;
    margin: auto;
    margin-bottom: 1em;

    .todo-header {
      display: flex;
      justify-content: space-between;
      border: 1px solid black;
      padding-left: 2em;

      @include small-screen {
        flex-direction: column;
         padding-left: 0em;
      }

      .todo-name {
        flex-basis: 65%;
        display: flex;
        align-items: center;

        @include small-screen {
          flex-basis: 100%;
          width: 100%;
          align-items: center;
          align-self: center;
          justify-content: center;
        }
      }

      .todo-action-buttons {
        flex-basis: 35%;
        display: flex;
        justify-content: space-between;
      }
    }

    .todo-update-form {
      border-left: 1px solid black;
      border-right: 1px solid black;
      border-bottom: 1px solid black;
    }
  }
</style>
