<template>
  <div>
    <el-row>
      <el-col :span="24">
        <app-header ref="header"></app-header>
        <app-slider ref="slider" :sliderHeight="sliderHeight"></app-slider>
        <div class="main-content" ref="mainContent">
          <router-view></router-view>
        </div>
        <app-footer ref="footer"></app-footer>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sliderHeight: 0
    }
  },
  methods: {
    init () {
      let windowHeight = $(window).height()
      let appHeaderHeight = $(this.$refs.header.$el).height()
      let appFooterHeight = $(this.$refs.footer.$el).height()
      let sliderHeight = windowHeight - appHeaderHeight - appFooterHeight
      console.log(windowHeight, appHeaderHeight, appFooterHeight)
      this.sliderHeight = sliderHeight
      let minContentHeight = sliderHeight
      $(this.$refs.mainContent).css('min-height', minContentHeight)
    }
  },
  mounted () {
    this.init()
  }
}

</script>

<style lang="scss" scoped>
  .main-content {
    margin-left: 140px;
  }

</style>
