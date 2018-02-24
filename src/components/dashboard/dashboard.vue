<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>

    <p>Your email address is {{email}}</p>

  </div>
</template>

<!-- axios get request -->
<script>
import axios from 'axios'

  export default{
    data(){
      return{
        email:'me@me.com'
      }
    },

    //created is a lifecycle hook of vuejs
    created(){
      //send get request
      axios.get('https://vueaxios-7085c.firebaseio.com/users.json')
      .then(res=>{
        console.log(res)

        //res.data is whats returned by backend
        const data=res.data
        const users=[]

        for(let key in data){
          const user=data[key]
          user.id=key
          users.push(user)
        }

        console.log(users)
        this.email=users[0].email
      })
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
