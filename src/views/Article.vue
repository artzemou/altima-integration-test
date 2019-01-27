<template>
  <div>
    <slot name="section-title"></slot>
    <section v-if="data.length" class="section section-articles" id="section-articles">
      <div class="section-content">
        <article
          class="section-articles-blog-article"
          v-for="(article, index) in data"
          :key="index">
            <div v-if="`article${article.id}` === $route.params.id">
              <div class="section-content-title" >
                <h2>{{article.title}}</h2>
              </div>
              <div class="section-content-subtitle" >
                <span>Proin iaculis purus consequat sem cure</span>
              </div>
              <div v-for="(p, index) in article.content" :key="index">
                <h3>{{p.title}}</h3>
                <p>{{p.p}}</p>
              </div>
            </div>
        </article>
      </div>
    </section>
    <slot name="footer"></slot>
  </div>
</template>
<script>
/* eslint-disable */
import fetch from 'cross-fetch';
export default {
  name: 'Article',
  data () {
    return {
      data: []
    }
  },
  methods: {

  },
  mounted () {
    this.manualScroll()
  },
  methods: {
    manualScroll () {
      setTimeout(() => {
        this.$scrollTo('#section-articles', {offset: -200})
      }, 1000)
    }
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
    max-width: 960px;
    margin: 0 auto 150px;
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
      margin-bottom: 60px;
      font-size: 20px;
      letter-spacing: 0px;
      color: #777777;
      font-family: "Bitter";
      font-weight: 400;
      text-align: center;
    }
    article{
      padding: 0 10px;
      h3{
        font-size: 18px;
        letter-spacing: 0px;
        color: #222222;
        font-family: "Poppins";
        margin: 10px 0;
        text-transform: uppercase;
      }
      p{
        margin-bottom: 60px;
      }
      @media (max-width: 1068px) {
        padding: 0 40px;
      }
    }
  }

</style>
