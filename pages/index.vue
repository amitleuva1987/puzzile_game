<template>
 <div class="container body-height">
    <h3>Memory Card Game</h3>
    <div class="row my-4">
    <div class="col-sm-2 my-2" v-for="i in card_elements" :key="i">  
        <Flipcard :index="i" />
    </div>
    </div>
 </div> 
</template>

<script>
export default {
  name: 'IndexPage',
  data(){
    return{
       cards:8,
       random_no:0,
       card_elements:[],
       isActive:false
    }
  },
  created(){
    while(this.card_elements.length < this.cards*2){
    var r = Math.floor(Math.random() * 100) + 1;
      if(this.card_elements.indexOf(r) === -1) {
          this.card_elements.push(r);
          this.card_elements.push(r);
      }    
    }
    for (var i = this.card_elements.length - 1; i > 0; i--) {
       // Generate random number
       var j = Math.floor(Math.random() * (i + 1));
                   
       var temp = this.card_elements[i];
       this.card_elements[i] = this.card_elements[j];
       this.card_elements[j] = temp;
    }
  }
}
</script>

<style scoped>
.body-height{
  min-height: 200px !important;
}

</style>