<template>
  <div>

    <el-table border :data="tableData">
      <el-table-column type="index" label="序号" width="80"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-input v-model="scope.row.ipt1" v-require="{collection:collectionName,rules:[{trigger:'change',handler:ipt1Handler}]}"></el-input>
        </template>
      </el-table-column>
      <el-table-column label="样子">
        <template slot-scope="scope ">
          <el-input v-model="scope.row.ipt2 " v-require="{collection:collectionName,rules:[{trigger: 'change',handler:ipt1Handler2}]} "></el-input>
        </template>
      </el-table-column>
      <el-table-column label="测试">
        <template slot-scope="scope ">
          <el-input v-model="scope.row.ipt3" v-bind="testProp"></el-input>
        </template>
      </el-table-column>
    </el-table>

    <el-button style="margin-top:20px " v-bind="testProp" @click="valifys " type="primary ">校验</el-button>

  </div>
</template>

<script>
import { valify } from "@/js/common.js";
export default {
  data() {
    return {
      revert4: "revert4",
      revert7: "revert7",
      testProp: { "v-test": 2 },
      testName: "v-test",
      radio: 1,
      ipt: "ipt",
      ipt2: "ipt2",
      swi: false,
      tableData: [
        { ipt1: "", ipt2: "ii" },
        { ipt1: "", ipt2: "ii" },
        { ipt1: "", ipt2: "ii" },
        { ipt1: "", ipt2: "ii" },
        { ipt1: "", ipt2: "ii" },
        { ipt1: "", ipt2: "ii" },
        { ipt1: "", ipt2: "ii" },
        { ipt1: "", ipt2: "" },
        { ipt1: "", ipt2: "" },
        { ipt1: "", ipt2: "" }
      ]
    };
  },
  created() {
    //保证集合名的唯一性
    this.collectionName = `teble${+new Date()}`;
  },
  methods: {
    ipt1Handler(value) {
      return value ? { suc: true, msg: "" } : { suc: false, msg: "空空如也" };
    },
    ipt1Handler2(value) {
      return value ? { suc: true, msg: "" } : { suc: false, msg: "空空如也" };
    },
    async valifys() {
      let valifyRes = await valify(
        this.$store.state.space[this.collectionName]
      );
      if (!valifyRes) {
        return;
      }
    }
  }
};
</script>

<style lang="less" scoped>

</style>
