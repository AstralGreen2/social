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

<script >
export default {
    data(){
       return{
            password:'',
             login: ''
       } 
    },
    methods:{
        authenticate(){
            this.axios.get('http://188.225.47.187/api/jsonstorage/65c1021f3ef91c5faf9cb44d78e4d50b')
            .then(
                (response)=>{
                    let users = response.data.users;
                    let found = false;
                    for(let index in users){
                        if(this.login == users[index].login && this.password == users[index].password){
                            this.$emit('login', users[index].myId);
                            this.$router.push('/users/' + users[index].myId);
                            found = true;
                            break;
                        }
                    }

                    if (!found){
                        window.alert('Что-то пошло не так. Попробуй еще');
                    }
                }
            )
        }

    }
}
</script>