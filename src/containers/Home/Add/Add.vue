<template>
  <div class="add-container border">
    <Header>New Task</Header>
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
    <Button :type="'success'" @on-button-click="submittedHandler">Add</Button>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import Header from '../../../components/UI/Header/Header';
  import Input from '../../../components/UI/Input/Input';
  import Textarea from '../../../components/UI/Textarea/Textarea';
  import DatePicker from '../../../components/UI/DatePicker/DatePicker';
  import Select from '../../../components/UI/Select/Select';
  import Button from '../../../components/UI/Button/Button';

  export default {
    namne: 'Add',
    components: { Header, Input, Textarea, DatePicker, Select, Button },
    data() {
      return {
        title: {
          value: '',
          isValidated: true
        },
        description: '',
        date: new Date().toISOString().substring(0, 10),
        priority: 'normal'
      }
    },
    methods: {
      ...mapActions({
        addItemAction: 'todo/addTodoAsync'
      }),
      submittedHandler: async function() {
        if (this.title.value === '') {
          this.title.isValidated = false;
        } else {
          this.title.isValidated = true;
          await this.addItemAction({
            title: this.title.value,
            date: this.date,
            description: this.description,
            priority: this.priority
          });
          this.title.value = '';
          this.description = '';
          this.priority = 'normal';
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .add-container {
    flex-basis: 43%;
    height: fit-content;
  }
</style>
