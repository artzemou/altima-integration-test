<template>
  <div>
    <slot name="section-title"></slot>
    <section class="section section-about">
      <div class="section-content">
        <div class="section-content-title" >
          <h2>About</h2>
        </div>
        <div class="section-content-subtitle" >
          <span>Proin iaculis purus consequat sem cure</span>
        </div>
        <article>
          <h3>Lorem ipsum</h3>
          <p>Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d'entre elles a été altérée par l'addition d'humour ou de mots aléatoires qui ne ressemblent pas une seconde à du texte standard. Si vous voulez utiliser un passage du Lorem Ipsum, vous devez être sûr qu'il n'y a rien d'embarrassant caché dans le texte. Tous les générateurs de Lorem Ipsum sur Internet tendent à reproduire le même extrait sans fin, ce qui fait de lipsum.com le seul vrai générateur de Lorem Ipsum. Iil utilise un dictionnaire de plus de 200 mots latins, en combinaison de plusieurs structures de phrases, pour générer un Lorem Ipsum irréprochable. Le Lorem Ipsum ainsi obtenu ne contient aucune répétition, ni ne contient des mots farfelus, ou des touches d'humour.</p>
          <h3>Dolores</h3>
          <p>On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).</p>
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
  name: 'About'

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
