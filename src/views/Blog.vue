<template>
  <div>
    <slot name="section-title"></slot>
    <section class="section section-blog" id="section-blog">
      <div class="section-content">
        <div class="section-content-title" >
          <h2>Blog</h2>
        </div>
        <div class="section-content-subtitle" >
          <span>Proin iaculis purus consequat sem cure</span>
        </div>
        <ul v-if="data.length" class="section-blog-articles">
          <li
            class="section-blog-articles-article"
            v-for="(article, index) in data"
            :key="index"
            @click="$router.push(`/blog/article${article.id}`)">
              <figure>
                <h3>{{article.title}}</h3>
                <div class="section-blog-articles-article-overlay">
                  <img :src="`${article.imgSrc}`" alt="">
                </div>
                <figcaption>
                  <span v-for="(word, index) in article.description.split(' ')" :key="index">
                    <span v-if="index < 35">{{word}} </span>
                  </span>
                  <span v-if="article.description.match(/(\w+)/g).length >= 35">...</span>
                </figcaption>
                <router-link :to="`/blog/article${article.id}`">Détail</router-link>
              </figure>

          </li>
        </ul>
      </div>
    </section>
    <slot name="footer"></slot>
  </div>
</template>
<script>
/* eslint-disable */
import fetch from 'cross-fetch';
export default {
  name: 'Blog',
  data () {
    return {
      data: []
    }
  },
  methods: {
    manualScroll () {
      setTimeout(() => {
        this.$scrollTo('#section-blog', {offset: -200})
      }, 1000)
    }
  },
  mounted () {
    this.manualScroll()
  },
  created () {
    (async () => {
      try {
        const res = await fetch('/static/json/articles.json', {
          method: 'GET'
        })
        if (res.status >= 400) {
          throw new Error("Bad response from server");
        }
        const data = await res.json();
        this.data = data;

      } catch (err) {
        console.error(err);
      }
    })();
  }

}
</script>
<style lang="scss" scoped>
  .section-content{
    &-title, h2{
      margin-top: 100px;
      font-size: 40px;
      letter-spacing: -2px;
      line-height: 75px;
      color: #222222;
      font-family: "Poppins";
      text-align: center;
      text-transform: uppercase;
    }
    &-subtitle{
      font-size: 20px;
      letter-spacing: 0px;
      color: #777777;
      font-family: "Bitter";
      font-weight: 400;
      text-align: center;
    }
  }
  .section-blog{
    max-width: 960px;
    margin: 0 auto;
    .section-blog-articles{
      display: flex;
      flex-wrap: wrap;
      margin: 60px -10px 150px;
      @media (max-width: 768px) {
        margin: 60px 10px 150px;
      }
      &-article{
        flex: 1 1 33%;
        list-style: none;
        max-width: calc(33% - 18px);
        margin: 10px;
        padding: 10px;
        list-style: none;
        overflow: hidden;
        cursor: pointer;
        @media (max-width: 768px) {
          flex: 1 1 50%;
          max-width: calc(50% - 20px);
        }
        @media (max-width: 568px) {
          flex-direction: column;
          max-width: 100%;
        }
        &-overlay{
          overflow: hidden;
        }
        figure{
          position: relative;
          h3{
            font-size: 18px;
            letter-spacing: 0px;
            color: #222222;
            font-family: "Poppins";
            margin: 10px 0;
          }
          img{
            display: block;
            width: 100%;
            transition: transform 1500ms linear;
            &:hover{
              transform: scale(1.1)
            }
          }
          figcaption{
            font-size: 14px;
            padding: 20px 1px;
            letter-spacing: 0px;
            color: #777777;
            font-family: "Bitter";
            font-weight: 400;
            word-wrap: break-word;
          }
          a{
            position: absolute;
            right: 10px;
            bottom: -20px;
            color: #777777;
          }
        }
      }
    }
  }
</style>
