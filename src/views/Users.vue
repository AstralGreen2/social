<template>
<v-container>
     <v-card class="d-inline-block mx-auto">
    <v-container>
      
      <v-row  justify="space-around">
        <v-col cols="8">
          <div class= "icon">
            <v-img
            height="75"
            width="75"
            src="https://randomuser.me/api/portraits/men/7.jpg"
          ></v-img>

          </div>
         
          <v-card-title>ijssdgsdg</v-card-title>
           <v-card-subtitle>kugfgdbisygffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff</v-card-subtitle>
        </v-col>

        <v-col
          cols="auto"
          class="text-center pl-0"
        >
          <v-row
            class="flex-column ma-0 fill-height"
            justify="center"
          >
            <v-col class="px-0">
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </v-col>

           


          </v-row>
         
        </v-col>

      </v-row>
    </v-container>
  </v-card>


  
</v-container>
  
</template>



<script>
export default {
   
    methods:{
      

        getUsers(){
            this.axios.get('http://jsonplaceholder.typicode.com/users')
            .then(
                (response)=>{
                
                window.console.log(response.data[0].id)
                }
            )
        }

    }
}
</script>