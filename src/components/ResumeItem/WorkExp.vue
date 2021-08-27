<template>
  <div class="work-item" ref="workItem">
    hello{{ id }}
    <i
      class="iconfont icon-shanchu close"
      :class="{ isOver: current === id }"
    ></i>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, inject } from "vue";
import globalThis from '../../utils/window.js'

const Component = defineComponent({
  props: {
    id: {
      type: Number,
      default: 1,
    },
    current: {
      type: Number,
      default: 1,
    },
  },
  setup() {
    // const interact = inject("interact");
    const isActive = ref(false);
    // expose to template
    return {
      // interact,
      isActive,
    };
  },
  mounted() {
 },
  methods: {
    mouseover() {
      this.isActive = true;
    },
  },
});
export default Component;
</script>

<style lang="less" scoped>
.work-item {
  width: 4rem;
  border-radius: 0.2rem;
  padding: 0.5rem;
  background-color: #29e;
  color: white;
  font-size: 0.5rem;
  font-family: sans-serif;
  touch-action: none;

  /* This makes things *much* easier */
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  .close {
    color: red;
    font-size: 0.8rem;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(100%, -50%);
    display: none;
    &.isOver {
      display: block;
    }
    cursor: pointer;
  }
}
</style>