<template>
  <div>{{message}}</div>
</template>

<script>
import exampleService from '../../../service/example'
export default {
  data () {
    return {
      message: ''
    }
  },
  mounted () {
    exampleService
      .hello()
      .then(data => {
        this.message = `${data.greet} ${data.name}`
      })
  }
}

</script>

<style lang="scss" scoped>

</style>
