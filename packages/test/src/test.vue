<template>
  <div class="test" @click="handleClick">{{ num }}</div>
</template>

<script>
export default {
  name: 'XrTest',
  data () {
    return {
      num: 0
    }
  },
  methods: {
    handleClick () {
      this.num++
    }
  }
}
</script>

<style lang="scss" scoped>
.test {
  width: 100px;
  height: 100px;
  line-height: 100px;
  border-radius: 50%;
  font-size: 30px;
  background: #24292e;
  color: white;
}
</style>
