<template>
  <div>
    <div class="box" @click="routerTo()">query传参</div>
  </div>
</template>
<script>
export default {
  name: `TestVueRouter`,
  methods: {
    routerTo() {
      this.$router.push({
        path: '/testVueRouterTo',
        query: {
          page: '这是页面1', code: '这是页面1的8989'
        }
      })
    }
  }
}
</script>
<style scoped>
.box{
  width: 100px;
  height: 60px;
  background-color: rgb(160, 216, 104,0.8);
  text-align: center;
  line-height: 60px;
  margin: 0 500px;
}
</style>

