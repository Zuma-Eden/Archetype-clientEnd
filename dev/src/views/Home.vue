<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>
       Hello Native ! {{ str }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  created(){
    let os = require('os')
    this.str = os.platform()
  },
  data(){
    return {
      str:''
    }
  }
}
</script>
