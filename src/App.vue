<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button class="mockBtn" @click="mockTest">Mock测试</button>
    <div class="mockData">{{mockData}}</div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import request from './api/request'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
    return {
      mockData: "还未获取到Mock数据",
    }
  },
  methods: {
    mockTest() {
      console.log("mockTest start: ")
      request({
        method: 'get',
        url: '/api/hello',
      }).then(response => {
        console.log("mockTest response: " + response)
        let data = response.data;
        this.mockData = data.data.fullName;
      }).catch(reject => {
        console.log("mockTest: " + reject.toString())
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  #mockBtn {

  }

  #mockData {

  }
</style>
