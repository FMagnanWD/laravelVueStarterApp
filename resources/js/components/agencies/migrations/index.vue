<template>
    <div>
      <h1>Migration des agences</h1>
      <div class="d-flex">
        <v-select
          prepend-icon="edit"
          :items="titles"
          item-text="name"
          label="Agences"
        ></v-select>
      </div>
    </div>
</template> 

<script>

import axios from "axios"
import { VSelect } from "vuetify/lib"

export default {
    name: "Home",
    components:{
      VSelect
    }, 
    data(){
      return {
        titles : [
          {
            name:"On test"
          }, 
          {
            name:"On test 2"
          }, 
          {
            name:"On test 3"
          }
        ]
      }
    },
    mounted(){
    }
}
</script>
