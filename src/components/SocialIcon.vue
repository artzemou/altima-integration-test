<template lang="html">
  <div class="social-icon">
    <img :src="src" alt="">
  </div>
</template>

<script>
export default {
  name: 'SocialIcon',
  props: {
    src: {
      type: String
    }
  }
}
</script>

<style lang="scss">
  .social-icon{
    margin:0 .5rem;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: #222222;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    img{
      width:60%;
    }
  }
</style>
