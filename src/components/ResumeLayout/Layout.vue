<template>
  <div class="layout-container">
    <div class="menu-title">设计器</div>
    <div class="menu-bar">
      <el-button class="add" type="success" @click="add"
        >增加一个模块</el-button
      >
      <!-- <van-button type="primary">复制代码</van-button> -->
    </div>
    <div class="menu-wrap" >
      <!-- <WorkExp
        v-for="item in ids"
        :item="item"
        :isCurrent="current.id === item.id"
        :key="item.id"
        @current="currentChange"
      /> -->
    </div>
  </div>
</template>

<script lang="ts">
import {  defineComponent,ref } from "vue";
const Component = defineComponent({
  setup(){
      let ids = ref(1);
      const current = ref(1);
    return{
      ids,
      current
    }
  },

  mounted(){

  },
  methods:{
    add(){
      this.ids +=1
    },
    currentChange(e) {
      this.current = e;
    },
  }
})
export default Component
</script>

<style lang="less" scoped>
.layout-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.3rem;
  box-sizing: border-box;

  .menu-bar {
    display: flex;
    align-items: center;
    padding-left: 0.3rem;
  }
  .menu-wrap {
    border: 0.05rem dashed rgb(156, 152, 152);
    padding: 0.3rem;
    margin: 0.3rem;
    flex: 1;
    position: relative;
  }
}
</style>