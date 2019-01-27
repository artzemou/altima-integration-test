<template lang="html">
  <figure :class="classProp">
    <div class="section-content-icon-img">
        <img v-lazy="src" alt="">
    </div>
    <figcaption>
      <slot name="section-content-icon-title"></slot>
      <div class="section-content-icon-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita porro saepe facilis vero dolor, velit vitae </div>
    </figcaption>
  </figure>
</template>

<script>
export default {
  name: 'FigureIcon',
  props: {
    src: {
      type: String
    },
    classProp: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
  .section-content-icon{
    flex: 1;
    margin:0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    &-img{
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 40px 0;

    }
    &-title{
      font-size: 18px;
      letter-spacing: 0px;
      line-height: 75px;
      color: #222222;
      font-family: "Poppins";
      font-weight: bold;
    }
    img{
      width: 60px;
    }
    &-outlined{
      .section-content-icon-img{
        width: 90px;
        height: 90px;
        border-radius: 50%;
        border: 2px solid #bcbcbc;
        margin: 40px 0 0;
      }
      .section-content-icon-content{
        margin: 0 -55px;
        @media (min-width: 768px) and (max-width: 1074px) {
          margin: 0;
        }

      }
    }

  }
</style>
