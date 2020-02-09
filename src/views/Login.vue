<template>
    <div class="d-flex justify-center">
        <v-card width="600px" class="mt-12 pa-10">
            <v-card-title>
                Войдите в аккаунт
            </v-card-title>

            <v-text-field
                label="Введите логин"
                v-model="login"
                outlined
            ></v-text-field>

            <v-text-field
                label="Введите пароль"
                v-model="password"
                outlined
            ></v-text-field>

            <v-btn @click="authenticate">
                Войти
            </v-btn>
        </v-card>
    </div>
</template>

<script>
export default {
    data(){
       return{
            password:'',
             login: ''
       } 
    },
    methods:{
        authenticate(){
            this.axios.get(' http://188.225.47.187/api/jsonstorage/3f9f336aca97e70115c98aceb4e3e643')
            .then(
                (response)=>{
                    let users = response.data;
                    let found = false;
                    for(let index in users){
                        if(this.login == users[index].login && this.password == users[index].password){
                            this.$router.push('/users' + this.myId);
                            found = true;
                            break;
                        }
                    }

                    if (!found){
                        window.alert('skufgsuyfg');
                    }
                }
            )
        }

    }
}
</script>