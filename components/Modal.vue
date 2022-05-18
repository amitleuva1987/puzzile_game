<template>
    <div>
    <button @click="showmodal">Launch demo modal</button>

    <b-modal id="modal-1" ref="result-modal" title="BootstrapVue">
    <p class="my-4">Hello from modal!</p>
    </b-modal>
    </div>    
</template>

<script>
export default {
   methods:{
    showmodal(){
      this.$refs['result-modal'].show()
    }
  }
}
</script>

