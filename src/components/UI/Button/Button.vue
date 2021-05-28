<template>
  <div class="form-group">
    <button class="btn" :class="'btn-' + btnType" @click="onClickedHandler" :style="{ width: size === 'small' ? '70%' : '100%' }">
      <slot></slot>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'Button',
    props: {
      btnType: {
        type: String,
        default: 'success'
      },
      size: {
        type: String,
        default: 'big'
      }
    },
    methods: {
      onClickedHandler: function() {
        this.$emit('on-button-click');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .btn {
    color: white;
    border-radius: 10px;
    height: 32px;
    border: none;
  }

  .btn-success {
    background-color: #5CB85C;
  }

  .btn-danger {
    background-color: #D9534F;
  }

  .btn-info {
    background-color: #00BCD4;
  }

  .btn-primary {
    background-color: #2196F3;
  }
</style>
