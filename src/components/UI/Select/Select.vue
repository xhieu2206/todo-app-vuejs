<template>
  <div class="form-group select">
    <label>
      Priority
    </label>
    <select :value="value" @change="changedHandler($event)">
      <option v-for="item in options" :key="item.value" :value="item.value">{{ item.text }}</option>
    </select>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: String
      }
    },
    data() {
      return {
        options: [
          {
            value: 'low',
            text: 'Low'
          },
          {
            value: 'normal',
            text: 'Normal'
          },
          {
            value: 'high',
            text: 'High'
          },
        ]
      }
    },
    methods: {
      changedHandler: function(e) {
        this.$emit('on-change', e.target.value);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .select {
    flex-basis: 45%;
    margin-right: 0;
  }
</style>
