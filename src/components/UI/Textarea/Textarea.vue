<template>
  <div class="form-group">
    <label>
      <slot></slot>
    </label>
    <textarea rows="10" @change="onChangedHandler($event)" :value="value"></textarea>
  </div>
</template>

<script>
  export default {
    name: 'Textarea',
    props: {
      value: {
        type: String,
        default: ''
      }
    },
    methods: {
      onChangedHandler: function(e) {
        this.$emit('on-change', e.target.value)
      }
    }
  }
</script>

<style lang="scss" scoped>
  label {
    font-weight: bold;
  }

  textarea {
    width: 100%;
  }
</style>
