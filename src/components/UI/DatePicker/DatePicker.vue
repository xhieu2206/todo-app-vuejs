<template>
  <div class="form-group date-picker">
    <label>Due Date</label>
    <input :value="value" type="date" @change="onChangedHandler($event)" :min="new Date().toISOString().substring(0, 10)" />
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
        require: true
      }
    },
    methods: {
      onChangedHandler: function(e) {
        this.$emit('on-change-date', e.target.value);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .date-picker {
    flex-basis: 45%;
    margin-left: 0;
  }
</style>
