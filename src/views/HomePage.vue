<template>
  <div>
    <slot name="section-title"></slot>
    <SectionWrapper classProp="section-professional-services">
      <div slot="section-content-title" class="section-content-title" >
        <h2>Professional Services</h2>
      </div>
      <div slot="section-content-subtitle" class="section-content-subtitle">
        <span>Proin iaculis purus consequat sem cure</span>
      </div>
      <div slot="section-content-icons" class="section-content-icons" >
        <FigureIcon
          classProp="section-content-icon"
          :src="require('@/img/icons-067-heart-svg.svg')"
        >
        </FigureIcon>
        <FigureIcon
          classProp="section-content-icon"
          :src="require('@/img/icons-077-responsive-svg.svg')"
        >
        </FigureIcon>
        <FigureIcon
          classProp="section-content-icon"
          :src="require('@/img/icons-005-graph-svg.svg')"
        >
        </FigureIcon>
      </div>
    </SectionWrapper>
    <SectionWrapper classProp="section-just-relax">
      <div slot="section-content-title" class="section-content-title" >
        <h2>Just relax & let us do the heavy lifting</h2>
      </div>
      <div slot="section-content-subtitle" class="section-content-subtitle">
        <span>Proin iaculis purus consequat sem cure digni. Donec porttitora entum suscipit aenean rhoncus posuere odio in tinidunt.</span>
      </div>
      <ul slot="section-content-list" class="section-content-list">
        <li>
          <Icon :src="require('@/img/icons-042-check-svg.svg')" classProp="icon-check" :size="25"></Icon>
          <span>Initial Setup & Customizations</span>
        </li>
        <li>
          <Icon :src="require('@/img/icons-042-check-svg.svg')" classProp="icon-check" :size="25"></Icon>
          <span>Regular Updates</span>
        </li>
        <li>
          <Icon :src="require('@/img/icons-042-check-svg.svg')" classProp="icon-check" :size="25"></Icon>
          <span>Round The Clock Support</span>
        </li>
      </ul>
      <div slot="section-content-btn" class="section-content-btn">
        <span>View portfolio</span>
      </div>
      <img slot="background" v-lazy="require('@/img/just-relax-background.jpg')" alt="">
    </SectionWrapper>
    <SectionWrapper classProp="section-6th">
      <div slot="section-content-title" class="section-content-title" >
        <h2>Frameworks & Tool</h2>
      </div>
      <div slot="section-content-subtitle" class="section-content-subtitle">
        <span>Proin iaculis purus consequat sem cure</span>
      </div>
      <div slot="section-content-icons" class="section-content-icons" >
        <FigureIcon
          classProp="section-content-icon section-content-icon-outlined"
          :src="require('@/img/icons-087-reactjs-svg.svg')">
          <div slot="section-content-icon-title" class="section-content-icon-title">REACT</div>
        </FigureIcon>
        <hr>
        <FigureIcon
          classProp="section-content-icon section-content-icon-outlined"
          :src="require('@/img/icons-082-git-svg.svg')">
          <div slot="section-content-icon-title" class="section-content-icon-title">GIT</div>
        </FigureIcon>
        <hr>
        <FigureIcon
          classProp="section-content-icon section-content-icon-outlined"
          :src="require('@/img/icons-089-sass-svg.svg')">
          <div slot="section-content-icon-title" class="section-content-icon-title">SASS</div>
        </FigureIcon>
      </div>
    </SectionWrapper>
    <slot name="footer"></slot>
  </div>
</template>

<script>
import SectionWrapper from '@/components/SectionWrapper'
import FigureIcon from '@/components/FigureIcon'
import Icon from '@/components/Icon'
export default {
  name: 'HomePage',
  components: { SectionWrapper, FigureIcon, Icon }
}
</script>
