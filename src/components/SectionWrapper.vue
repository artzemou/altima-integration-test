<template>
  <section :class="['section', classProp]">
    <div class="section-content">
      <slot name="section-content-title"></slot>
      <slot name="section-content-subtitle"></slot>
      <slot name="section-content-list"></slot>
      <slot name="section-content-btn"></slot>
      <slot name="section-content-icons"></slot>
    </div>
    <slot name="background"></slot>
  </section>
</template>

<script>
export default {
  name: 'Wrapper',
  props: {
    classProp: {
      type: String
    }
  },
  data () {
    return {
    }
  }

}
</script>
<style lang="scss" scoped>
/* eslint-disable */
.section{
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &-title{
    min-height: 500px;
    .section-content{
      position: absolute;
      text-align: center;
      max-width: 500px;
      margin: 0 auto;
      .section-content-title, h1{
        font-size: 60px;
        font-weight: normal;
        letter-spacing: -3px;
        line-height: 60px;
        color: #ffffff;
        font-family: "Poppins";
        text-transform: uppercase;
      }
      .section-content-subtitle{
        font-size: 20px;
        letter-spacing: 0px;
        color: #cccccc;
        font-family: "Bitter";
        font-weight: 400;
        text-align: center;
        margin: 25px 0;
      }
      .section-content-btn{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 200px;
        height: 60px;
        margin: 0 auto;
        border-radius: 30px;
        background-color: #d83359;
        color: #ffffff;
        text-transform: uppercase;
        font-size: 15px;
        letter-spacing: 0px;
        line-height: 43px;
        color: #ffffff;
        font-family: "Poppins";
        text-align: center;
        box-shadow: 0px 1px 1px rgba(0,0,0,0.7);
        &:hover{
          color: #222222;
          background: #ffffff;
          cursor: pointer;
        }
      }
    }

    img{
      width: 100%;
    }
  }
  &.section-professional-services{
    max-width: 960px;
    margin: 0 auto;
    .section-content{
      margin: 100px auto;
      .section-content-title, h2{
        font-size: 40px;
        font-weight: normal;
        letter-spacing: -2px;
        line-height: 75px;
        color: #222222;
        font-family: "Poppins";
        text-align: center;
        text-transform: uppercase;
      }
      .section-content-subtitle{
        font-size: 20px;
        letter-spacing: 0px;
        color: #777777;
        font-family: "Bitter";
        font-weight: 400;
        text-align: center;
      }
      .section-content-icons{
        display: flex;
        margin: 0 -25px;
      }
    }
  }
  &.section-just-relax{
    .section-content{
      position: absolute;
      text-align: center;
      max-width: 500px;
      margin-left: 95px;
      text-align: left;
      .section-content-title, h2{
        font-size: 40px;
        font-weight: normal;
        letter-spacing: -2px;
        line-height: 55px;
        color: #ffffff;
        font-family: "Poppins";
      }
      .section-content-subtitle{
        font-size: 16px;
        letter-spacing: 0px;
        color: #cccccc;
        font-family: "Bitter";
        font-weight: 400;
        margin: 40px 0 20px;
      }
      .section-content-list{
        list-style: none;
        margin-bottom: 40px;
        li{
          display: flex;
          align-items: center;
          span{
            display: inline-flex;
            font-size: 16px;
            letter-spacing: 0px;
            color: #cccccc;
            font-family: "Bitter-Light";
            font-weight: 400;
            padding: 10px;

          }
        }
      }
      .section-content-btn{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 200px;
        height: 60px;
        margin: 0 auto;
        border-radius: 30px;
        background-color: #d83359;
        color: #ffffff;
        text-transform: uppercase;
        font-size: 15px;
        letter-spacing: 0px;
        line-height: 43px;
        color: #ffffff;
        font-family: "Poppins";
        text-align: center;
        box-shadow: 0px 1px 1px rgba(0,0,0,0.7);
        &:hover{
          color: #222222;
          background: #ffffff;
          cursor: pointer;
        }
      }
    }

    img{
      width: 130%;
    }
  }

  &.section-6th{
    max-width: 960px;
    margin: 0 auto;
    .section-content{
      margin: 100px auto;
      .section-content-title, h2{
        font-size: 40px;
        font-weight: normal;
        letter-spacing: -2px;
        line-height: 36px;
        color: #222222;
        font-family: "Poppins";
        text-align: center;
      }
      .section-content-subtitle{
        font-size: 20px;
        letter-spacing: 0px;
        color: #777777;
        font-family: "Bitter";
        font-weight: 400;
        text-align: center;
        margin: 20px 0 0;
      }
      .section-content-icons{
        display: flex;
        margin: 0 -25px;
      }
      hr{
        background: #bcbcbc;
        transform: translateY(-55px) rotate(90deg);
        margin: 55px;
        width: 2px;
      }
    }
  }

  &-ready-to-talk{
    background: #d83359;
    .section-content-title, h2{
      font-size: 40px;
      font-weight: normal;
      letter-spacing: -2px;
      color: #ffffff;
      font-family: "Poppins";
      text-align: center;
      margin-top: 30px;
    }
    .section-content-btn{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 200px;
      height: 45px;
      margin: 30px auto 60px;
      border-radius: 3px;
      background-color: #3e3e3e;
      text-transform: uppercase;
      font-size: 18px;
      letter-spacing: 0px;
      line-height: 41px;
      color: #ffffff;
      font-family: "Poppins";
      text-align: center;
      border: 1px solid #ffffff;
      &:hover{
        color: #222222;
        background: #ffffff;
        cursor: pointer;
      }
    }
  }
}
#app{
  @media (max-width: 1324px) {
    .section{
      &-title{
        min-height: 300px;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    .section{
      &-6th{
        .section-content{
          .section-content-icons{
            margin: 0;
          }
        }
        hr{
          transform: translateY(-20px) rotate(90deg);
          height: 100px;
        }
      }
      &-title{
        img{
          width:130%;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .section{
      &-title{
        min-height: 200px;
      }
      &-professional-services, &-6th{
        .section-content{
          .section-content-icons{
            flex-direction: column;
          }
        }
        hr{
          display: none;
        }
      }
      &-just-relax{
        .section-content{
          margin: 0;
        }
        img{
          z-index: -1;
          width:350%;
          transform: translate(-100px);
        }
      }
      .section-content{
          max-width: 300px;
          .section-content-title, h1, h2{
            font-size: 32px;
            line-height: 28px;
            letter-spacing: 0;
          }
          .section-content-subtitle{
            font-size: 14px;
            margin: 20px 0;
          }

        }
        &-title{
          img{
            width:200%;
          }
        }
    }
  }

  @media (max-width: 320px) {
    .section{
      .section-content{
        max-width: 200px;
        .section-content-title, h1, h2{
          font-size: 18px;
          line-height: 23px;
          letter-spacing: 0;
        }
        .section-content-subtitle{
          font-size: 10px;
          margin: 20px 0;

        }
      }

    }

  }

}

</style>
