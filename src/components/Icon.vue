<template lang="html">
  <div :class="['icon', classProp]" :style="{ width: size + 'px', height: size + 'px'}">
    <img :src="src" alt="">
  </div>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    src: {
      type: String
    },
    classProp: {
      type: String
    },
    size: {
      type: Number
    }
  }
}
</script>

<style lang="scss">
  .icon{
    border-radius: 20px;
    border: 1px solid #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    img{
      width:100%;
    }
  }
</style>
