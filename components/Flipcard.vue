<template>
    <div>
    <div class="flip-card">
    <div class="flip-card-inner" @click="flipcard" :class="{'flip-card-inner-rotate non-clickable':isActive}">
    <div class="flip-card-front">
      <img src="https://via.placeholder.com/150/ffff00/808080?Text=X" />
    </div>
    <div class="flip-card-back">
      <h1>{{index}}</h1> 
      <h1 v-if="match_status">Correct</h1>
    </div>
    </div>
    </div>  
    </div>
</template>
<script>
export default {
    props:['index'],
    data(){
        return{
            isActive:false,
            currindex:'',
            match_status:false,
        }
    },
    watch:{
          get_match_values(newGet_match_values){
            if(newGet_match_values.includes(this.index))
                         this.match_status = true;      
          },
          getResetValue(newGetResetValue){
             if(newGetResetValue == true && this.match_status == false){
                  setTimeout(() => {  this.isActive = false; }, 1000);
             //     setTimeout(() => {  this.$store.commit('resetValue'); }, 2100);
             }     
          }
    },
    computed:{
      get_match_values(){
          return this.$store.getters.getMatchValues;
      },
      getResetValue(){
          return this.$store.getters.getResetValue;
      }
    },
    methods:{
        flipcard(){
                this.isActive = !this.isActive;
                this.$store.commit('setIndex',this.index);
                // if(this.$store.getters.getFlipValue == false ){
                //     setTimeout(() => {  this.isActive = false; }, 1000);
                // }    
        }
    }
}
</script>

<style scoped>
.flip-card {
  background-color: transparent;
  width: 175px;
  height: 150px;
  perspective: 900px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card-inner-rotate {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
}
.non-clickable{
  pointer-events: none;
}
</style>