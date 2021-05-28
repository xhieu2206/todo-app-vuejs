<template>
  <div class="form-group">
    <input
      :placeholder="placeholder"
      :class="{ 'not-validated': !isValidated }"
      @keyup="onChangedHandler($event)"
      :value="value"
      :required="isRequired" />
  </div>
</template>

<script>
  export default {
    name: 'Input',
    props: {
      value: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      },
      isRequired: {
        type: Boolean,
        default: false
      },
      isValidated: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      onChangedHandler: function(e) {
        this.$emit('on-change', e.target.value.trim());
      }
    }
  }
</script>

<style lang="scss" scoped>
  input {
    display: block;
    width: 100%;
    border: 1px solid #BDBDBD;
    border-radius: 5px;
    height: 32px;
    margin: auto;
    text-indent: 1em;
  }

  .not-validated {
    border: 1px solid red;
  }
</style>
