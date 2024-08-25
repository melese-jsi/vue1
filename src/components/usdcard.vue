<template>
  <div>
    <h1>exchange rates of USD</h1>
    <table>
      <tr><th>Bank</th><th>Buying</th><th>Selling</th></tr>
      <tr v-for="res in result" v-bind:key="res">
        <td>{{ res.bank }}</td>
        <td>{{ res.buying }}</td>
        <td>{{ res.selling }}</td>
      </tr>
    </table>

  </div>
</template>

<script lang ="js">

const httpdata = async ()=>{
    const response = await fetch("https://api.addissoftware.com/banks-ethiopia/api/exchanges/cardData")
    if (response.status !==200) {
      throw Error("No data found")
    }
    //console.log(response)
    const data = await response.json()
  
    //console.log(data)
    let usd_data=data.filter((item)=>Object.keys(item).includes('USD'))[0]
    
    // for(let obj of data)
    // {
       
    //    if(obj&& Object.keys(obj).includes('USD')){
    //      usd_data=obj['USD'];
    //      break;
    //    }
    // }
    
    return usd_data['USD'];

}

export default {
    name: 'usdcardView',
    data(){
        return {result:[]};
    },
    mounted(){
    httpdata().then(
      (result)=>{
       this.result=result
      }
    ).catch((err)=>console.log("error "+err.message))
  }

    }
  

</script>

<style>

</style>