<template>
  <div id="app" :class="[{ 'no-scroll': noScroll }]">
    <header>
      <div class="header-content">
        <div class="header-logo">
          <img v-lazy="require('@/img/logo.jpg')" alt="">
          <span>Test intégration</span>
        </div>
        <nav :class="[{ isOpened: isOpened }]">
          <ul>
            <li @click="isNavOpened"><router-link to="/" v-scroll-to="'#app'">Home</router-link></li>
            <li @click="isNavOpened"><router-link to="/about" v-scroll-to="'#app'">About</router-link></li>
            <li @click="isNavOpened"><router-link to="/blog" v-scroll-to="'#app'">Blog</router-link></li>
            <li @click="isNavOpened"><router-link to="/" v-scroll-to="'#app'">Portfolio</router-link></li>
            <li @click="isNavOpened"><router-link to="/" v-scroll-to="'#app'">Contact</router-link></li>
          </ul>
        </nav>
        <div @click="isNavOpened" class="header-icon-burger">
          <Icon :src="require('@/img/burger-icon-svg.svg')" classProp="icon-burger" :size="40" ></Icon>
        </div>
      </div>
    </header>
    <transition name="router-anim" mode="out-in" appear>
      <router-view class="view">
        <SectionWrapper classProp="section-title" slot="section-title">
          <div slot="section-content-title" class="section-content-title" >
            <h1>Creative digital solutions</h1>
          </div>
          <div slot="section-content-subtitle" class="section-content-subtitle">
            <span>Proin iaculis purus consequat sem cure</span>
          </div>
          <div slot="section-content-btn" class="section-content-btn">
            <span>View portfolio</span>
          </div>
          <img slot="background" v-lazy="require('@/img/background.jpg')" alt="">
        </SectionWrapper>
        <footer slot="footer">
          <SectionWrapper classProp="section section-ready-to-talk" slot="section-ready-to-talk">
            <div slot="section-content-title" class="section-content-title" >
              <h2>Ready to talk about your next project?</h2>
            </div>
            <div slot="section-content-btn" class="section-content-btn">
              <span>Contact Us</span>
            </div>
          </SectionWrapper>
          <div class="footer-content">
            <div class="footer-copyright">© Copyright 2017 altima</div>
            <div class="footer-social-icons">
              <SocialIcon :src="require('@/img/icons-021-twitter-svg.svg')"></SocialIcon>
              <SocialIcon :src="require('@/img/icons-040-facebook-svg.svg')"></SocialIcon>
              <SocialIcon :src="require('@/img/icons-041-google-svg.svg')"></SocialIcon>
              <SocialIcon :src="require('@/img/icons-065-pinterest-svg.svg')"></SocialIcon>
            </div>
          </div>
        </footer>
      </router-view>
    </transition>
  </div>
</template>
<script>
/* eslint-disable */
import SectionWrapper from '@/components/SectionWrapper'
import SocialIcon from '@/components/SocialIcon'
import Icon from '@/components/Icon'
export default {
  name: 'App',
  components: { SectionWrapper, SocialIcon, Icon },
  data () {
    return {
      isOpened: false,
      noScroll: false
    }
  },
  methods: {
    isNavOpened() {
      this.isOpened ? this.isOpened = false : this.isOpened = true
    }
  }
}
</script>

<style lang="scss">
  @font-face {
    font-family:"Poppins";
    src: url("/static/fonts/Poppins/Poppins-Regular.ttf") format("truetype");
  }
  @font-face {
    font-family:"Poppins-Light";
    src: url("/static/fonts/Poppins/Poppins-Light.ttf") format("truetype");
  }
  @font-face {
    font-family:"Bitter";
    src: url("/static/fonts/Bitter/Bitter-Regular.ttf") format("truetype");
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    overflow-x: hidden;
    font: 14px "Poppins", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #555555;
    #app {
      padding-top: 115px;
      &.no-scroll{
        max-height: 100vh;
        overflow: hidden;
      }
      header{
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1;
        height: 115px;
        background: #ffffff;
        .header-logo{
          display: flex;
          align-items: center;
          @media (max-width: 768px) {
            margin: 20px;
          }
          img{
            width:40px;
            height:40px;
            margin-right: 1rem;
          }
          span{
            font-size: 24px;
            letter-spacing: -1px;
            line-height: 41px;
            font-weight: 600;
          }
        }
        .header-icon-burger{
          display:flex;
          align-items: center;
          cursor: pointer;
          .icon-burger{
            display: none;
            @media (max-width: 768px) {
              display: block;
              position: absolute;
              right: 20px;
              z-index: 2;
            }
          }
        }

        .header-content{
          max-width: 960px;
          margin: 0 auto;
          position: relative;
          display: flex;
          align-items: center;
          height: 100%;
          @media (max-width: 768px) {
            position: initial;

          }
          nav{
            position: absolute;
            right: 0;
            @media (max-width: 768px) {
              display: flex;
              top:0;
              z-index: 1;
              background: #ffffff;
              width: 100%;
              height: 100vh;
              transform: translateX(100%);
              align-items: center;
              justify-content: center;
              font-size: 30px;

              &.isOpened{

                transition: transform 500ms ease-in;
                transform: translateX(0);
              }
            }
            ul{
              display:flex;
              align-items: center;
              list-style: none;
              @media (max-width: 768px) {
                flex-direction: column;
              }
              li{
                a{
                  padding: 20px;
                  line-height: 41px;
                  color: #777777;
                  font-weight: 600;
                  text-align: center;
                  text-decoration: none;
                  text-transform: uppercase;
                  &:hover{
                    color: #000000;
                  }
                  @media (max-width: 768px) {
                    line-height: 60px;
                  }
                }
              }
            }
          }
        }
      }
      footer{
        background: #ffffff;
        .footer-content{
          height:175px;
          max-width: 960px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          @media (max-width: 768px) {
            justify-content: center;
          }
          @media (max-width: 480px) {
            flex-direction: column;
            padding: 40px;
          }
        }

        .footer-social-icons{
          margin-left: 60px;
          display: flex;
          @media (max-width: 480px) {
            margin: 20px 0;
          }

        }
      }
    }
  }

  .router-anim-enter-active {
    animation: coming 500ms;
    animation-delay: .5s;
    opacity: 0;
  }
  .router-anim-leave-active {
    animation: going 250ms;
  }

  @keyframes going {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @keyframes coming {
    from {
      transform: translateY(-500px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
</style>
