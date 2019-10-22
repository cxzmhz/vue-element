<template>
  <div>
    <component :is="type" :rules="rules" v-model="ipt1" ref="ipt1"></component>
    <el-button @click="emit " type="primary ">emit</el-button>

  </div>
</template>

<script>
export default {
  data() {
    return {
      ipt1: "",
      type: "el-input",
      rules: [1, 2, 3],
      revert3: "revert3",
      revert5: "revert5",
      revert6: "revert6"
    };
  },
  mounted() {
    this.$on("test1", v => {
      console.log(v);
    });
  },
  methods: {
    emit() {
      console.log("haah");
      // this.$emit("test1", "haha");
      console.log(this.$refs.ipt1);
      console.log(this.$refs.ipt1.$attrs);
      this.$refs.ipt1.$el.addEventListener("change", () => {
        console.log("change....");
      });
    }
  }
};
</script>

<style lang="less" scoped>

</style>
