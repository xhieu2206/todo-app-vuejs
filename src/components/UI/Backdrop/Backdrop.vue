<template>
  <transition name="slide">
    <div v-if="isShow" class="modal-item">
      <div class="modal-background" @click="BackdropClickedHandler"></div>
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    BackdropClickedHandler: function() {
      this.$emit('backdrop-clicked');
    }
  }
}
</script>

<style lang="scss" scoped>
  .modal-item {
    position: fixed;
    overflow: visible;
    width: 100%;
    height: 100%;
    z-index: 200;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    height: 100%;
    display: flex;

    .modal-background {
      background-color: rgba(10,10,10,.86);
      bottom: 0;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
    }
  }

  // transition
  .slide-enter-active {
    transition: opacity .2s linear;
    -webkit-transition: opacity .2s linear;
    -moz-transition: opacity .2s linear;
    -o-transition: opacity .2s linear;
  }
  .slide-leave-active {
    transition: opacity .2s linear;
    -webkit-transition: opacity .2s linear;
    -moz-transition: opacity .2s linear;
    -o-transition: opacity .2s linear;
  }
  .slide-enter, .slide-leave-to {
    opacity: 0;
  }
</style>
