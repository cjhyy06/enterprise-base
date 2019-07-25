<template>
  <div class="container" :style="{height:sliderHeight+'px'}">
    <el-menu :default-active="activeIndex" @select="handleSelect" :background-color="appMenuBackgroundColor" :text-color="appMenuTextDefaultColor" :active-text-color="appMenuActiveTextColor">
      <template v-for="(menu, index) in menus">
        <el-menu-item v-if="!menu.children" :key="index" :index="`${index+1}`">{{menu.name}}</el-menu-item>
        <el-submenu v-else :index="`${index+1}`" :key="index">
          <template slot="title">{{menu.name}}</template>
          <el-menu-item v-for="(submenu, subIndex) in menu.children" :index="`${index}-${subIndex}`" :key="subIndex">{{submenu.name}}
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import menus from '../../data/menu'
import variables from '../../styles/variables.scss'
export default {
  name: 'app-slider',
  data () {
    return {
      menus: menus,
      activeIndex: '1',
      appMenuBackgroundColor: variables.appMenuBackgroundColor,
      appMenuTextDefaultColor: variables.appMenuTextDefaultColor,
      appMenuActiveTextColor: variables.appMenuActiveTextColor,
      appMenuActiveBackgroundColor: variables.appMenuActiveBackgroundColor
    }
  },
  props: {
    sliderHeight: {
      type: Number,
      required: true
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}

</script>

<style lang="scss" scoped>
  @import '../../styles/variables.scss';

  .container {
    width: 235px;
    background: $app-slider-color;
    float: left;
  }

</style>
