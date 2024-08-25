<template>
    <div>
      <h1>Exchange rates of EUR</h1>
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
  
  <script>
  
  const httpdata = async ()=>{
      const response = await fetch("https://api.addissoftware.com/banks-ethiopia/api/exchanges/cardData")
      if (response.status !==200) {
        throw Error("No data found")
      }
      //console.log(response)
      const data = await response.json()
    
      //console.log(data)
      let usd_data= data.filter((item)=>Object.keys(item).includes('EUR'))[0]
    //   for(const obj of data)
    //   {
    //     console.log(obj)
         
    //      if(obj && Object.keys(obj).includes('EUR')){
    //        usd_data=obj['EUR'];
    //        break;
    //      }
    //   }
      console.log(usd_data)
      return usd_data['EUR'];
  
  }
  
  export default {
      name: 'eurcardView',
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