<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import SelfTable from "./components/SelfTable.vue";
import Direcive from "./components/Directive.vue";

export default {
  name: "app",
  data() {
    return {
      test: "haha",
      myData: {
        name: "el-input",
        value: "",
        events: [
          {
            name: "input",
            handler: v => {
              this.myData.value = v;
            }
          },
          {
            name: "blur",
            handler: () => {
              console.log(this.myData.value);
            }
          }
        ]
      }
    };
  },
  components: {
    SelfTable,
    Direcive
  },
  methods: {
    tt(v) {
      console.log("haha");
      this.test = v;
    }
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
