<template>
    <div class="d-flex justify-center">
        <v-card width="600px" class="mt-12 pa-10">
            <v-card-title>
                Зарегистрироваться
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

            <v-text-field
                label="Введите имя"
                v-model="name"
                outlined
            ></v-text-field>

            <v-text-field
                label="Введите адрес своего сайта"
                v-model="website"
                outlined
            ></v-text-field>

            <v-text-field
                label="Введите email"
                v-model="email"
                outlined
            ></v-text-field>

            <v-text-field
                label="Введите свой город"
                v-model="city"
                outlined
            ></v-text-field>

            <v-text-field
                label="Введите название своей комапании"
                v-model="company"
                outlined
            ></v-text-field>

            <v-text-field
                label="Введите ссылку на фото"
                v-model="photo"
                outlined
            ></v-text-field>

            


            <v-btn @click="register">
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
            login: '',
            name:'',
            website:'',
            email:'',
            city:'',
            company:'',
            photo:'',
       } 
    },
    methods:{
        register(){
            
           
            let pswd = this.password;
            let upper = 0;
           

                for(let i=0; i<pswd.length; i++){
                    if(pswd[i] == pswd[i].toUpperCase())
                        upper+=1;
                }
                

            this.axios.get('http://188.225.47.187/api/jsonstorage/65c1021f3ef91c5faf9cb44d78e4d50b')
            .then(
                (response)=>{
                   let users = response.data.users;
                    window.console.log(response.data.users);
                   let id = users.length;
                    ////////////
                    let found = false;
                    for(let index in users){
                        if(this.login == users[index].login){
                            let alert = "Такой логин уже занят, может попоробуете ввести '"  + "super " + this.login + "' или 'ultra super " + this.login + "'";
                             window.alert(alert);
                            found = true ;
                            break;
                        }
                    }

                       if ((upper<1)&&(pswd.length < 6)){
                        window.alert("Пароль должен состоять из не менее чем из 6 символов и содержать заглавную букву");
                    }
                     

                     if(( found == false)&&(this.password!='')&&(upper>1)&&(pswd.length > 6)){
                        let new_user = {
                        password:this.password,
                        login:this.login,
                        name:this.name,
                        website:this.website,
                        email:this.email,
                        city:this.city,
                        company:this.company,
                        photo:this.photo,
                        myId: id

                    }  

                    
                   
                    users.push(new_user);

                    this.axios.put('http://188.225.47.187/api/jsonstorage/65c1021f3ef91c5faf9cb44d78e4d50b',{
                       "users": users
                    });

                    this.$router.push("/login");

                     }

                     

                    
                }
            )
        }

    }
}
</script>