<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
       Hello Native ! {{ str }}
    </div>
  </div>
</template>

<script>

export default {
    name: 'Home',
    created(){
        let os = require('os')
        this.str = os.platform()
    },
    mounted() {

    },
    data(){
        return {
          str:''
        }
  }
}
</script>
