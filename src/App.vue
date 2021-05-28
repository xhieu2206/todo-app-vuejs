<template>
  <router-view></router-view>
</template>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    box-sizing: border-box;
  }

  .border {
    border: 1px solid black;
  }

  .form-groups {
    width: 90%;
    margin: auto;
    margin-bottom: 1em;
    margin-top: 1em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .form-group {
    width: 90%;
    margin: auto;
    margin-bottom: 1em;
    padding-top: 1em;
    display: flex;
    flex-direction: column;

    @include small-screen {
      align-items: center;
    }

    label {
      font-weight: bold;
    }

    input {
      height: 32px;
      width: 100%;
    }

    select {
      height: 36px;
      width: 100%;
    }
  }

  // transition
  .slide-fade-enter-active {
    transition: opacity .3s linear;
    -webkit-transition: opacity .3s linear;
    -moz-transition: opacity .3s linear;
    -o-transition: opacity .3s linear;
  }

  .slide-fade-leave-active {
    transition: opacity .3s linear;
    -webkit-transition: opacity .3s linear;
    -moz-transition: opacity .3s linear;
    -o-transition: opacity .3s linear;
  }

  .slide-fade-enter, .slide-fade-leave-to {
    opacity: 0;
  }
</style>
