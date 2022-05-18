<template>
 <div class="container body-height">
    <h3>Memory Card Game</h3>
    <div class="row my-2">
        <div class="col-sm-6">
          <p v-if="getTimer">Time : {{countdown_minutes}}:{{countdown_seconds}} , Attempts : {{getCounter}}</p>
        </div>
        <b-modal ok-only ok-title="New Game" v-model="modalShow" @ok="resetgame">Contratulations! you have won. Your score is {{score}}</b-modal>
    </div>
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
       isActive:false,
       modalShow:false,
       countdown_minutes:0,
       countdown_seconds:0,
       score:0,
    }
  },
  created(){
    this.shuffecards()
  },
  watch:{
    getMatchcount(newGetMatchcount){
        if(newGetMatchcount == this.cards)
        {
            this.modalShow = true;
            this.score = Math.round((100 / this.getCounter) * 10);
        }    
    },
    getTimer(newGetTimer){
      if(newGetTimer == true){
        this.countDownTimer()      
      }
    }
  },
  computed:{
    getMatchcount(){
        return this.$store.getters.getMatchcount;
    },
    getCounter(){
        return this.$store.getters.getCounter;
    },
    getTimer(){
        return this.$store.getters.getTimer;
    }
  },
  methods:{
    shuffecards(){
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
    },
    resetgame(){
      this.card_elements = [];
      this.countdown_minutes = 0;
      this.countdown_seconds = 0;
      setTimeout(() => {this.shuffecards();},1000); 
      this.$store.commit('reset_all_values');
    }
    ,
    countDownTimer(){
      setTimeout(() => {
        if(this.countdown_seconds == 60){
          this.countdown_seconds = 0;
          this.countdown_minutes++;
          if(this.countdown_minutes < 10){
          this.countdown_minutes = '0'+this.countdown_minutes;
        }
        }
        this.countdown_seconds++;
        if(this.countdown_seconds < 10){
          this.countdown_seconds = '0'+this.countdown_seconds;
        }
        
        this.countDownTimer()
      },1000);
    }
  }
}
</script>

<style scoped>
.body-height{
  min-height: 200px !important;
}

</style>