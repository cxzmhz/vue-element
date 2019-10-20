<template>
  <div>
    <el-table border :data="tableData">
      <el-table-column :label="item.label" v-for="item in tableProp" :key="item.prop">
        <template slot-scope="scope">
          <el-form ref="ee" :model="scope.row">
            <el-form-item :prop="item.prop" :rules="{required: true, message: '域名不能为空', trigger: 'blur'}">
              <el-input v-model="scope.row[item.prop]"></el-input>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
    </el-table>
    <el-button @click="valify">校验</el-button>
  </div>
</template>

<script>
export default {
  name: "SelfTable",
  data() {
    return {
      tableData: [{ test: "1", pp: "" }, { test: "2", pp: "" }],
      tableProp: [{ label: "测试", prop: "test" }, { label: "渣渣", prop: "pp" }]
    };
  },
  components: {},
  methods: {
    valify() {
      console.log(this.$refs);
      console.log(Array.prototype.slice.call(this.$refs["ee"]));
      this.$refs["ee"].forEach(ref => {
        ref.validate(() => {});
        // ref.resetFields();//重置为默认值
      });
    }
  }
};
</script>

<style lang="less">

</style>
