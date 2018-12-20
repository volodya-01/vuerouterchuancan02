<template>
  <div>
    <span>{{page}}</span>
    <!-- <span v-show="code === '89'">{{code}}</span> -->
    <span>{{code}}</span>
    <div class="box" @click="routerTo2()">query传参</div>
  </div>
</template>
<script>
export default{
    name:"TestVueRouterTo",
  data() {
    return {
      page: '',
      code: '',
      password: ''
    }
  },
  created() {
    this.getRouterData()
  },
  methods: {
    getRouterData() {
      // debugger
      this.page = this.$route.query.page
      this.code = this.$route.query.code
      console.log('page', this.page)
      console.log('code', this.code)
    },
 routerTo2() {
      this.$router.push({
        path: '/',
       /*  query: {
          page: '这是页面2', code: '这是页面2的8989'
        } */
      })
    }
  }
}
</script>
<style scoped>
.box{
  width: 100px;
  height: 60px;
  background-color: rgba(230, 49, 94, 0.8);
  text-align: center;
  line-height: 60px;
  margin: 0 500px;
}
</style>