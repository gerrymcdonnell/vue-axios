<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
  </div>
</template>

<!-- axios get request -->
<script>
import axios from 'axios'

  export default{
    //created is a lifecycle hook of vuejs
    created(){
      //send get request
      axios.get('https://vueaxios-7085c.firebaseio.com/users.json')
      .then(res=>console.log(res))
      .catch(error=>console.log(error))
    }
  }

</script>

<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>
