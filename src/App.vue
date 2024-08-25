

<template>
   <div>
       <div><table>
          <tr><td>bank</td><td>selling</td></tr>
          <tr><td>addis</td><td>109.8</td></tr>

       </table></div>
      <router-link to="/usd">USD</router-link>|
      <router-link to="/eur">EUR</router-link>
      <router-view/>
      
    </div>
 
  
 </template>
<script>

 export default {
  name: 'App',
  components:{
    
  }
 
 
  
};



</script>



<style>

</style>
