<template>
    <div class="login-page">
        <div class="form">
           
            <div v-if="passwordConfirmationError" class="alert alert-danger">
                <strong>{{ passwordConfirmationError}}</strong>
            </div>
            <div v-if="nameError" class="alert alert-danger">
                <strong>{{ nameError}}</strong>
            </div>
             <div v-if="emailError" class="alert alert-danger">
                <strong>{{ emailError}}</strong>
            </div>
            <div v-if="passwordError" class="alert alert-danger">
                <strong>{{ passwordError}}</strong>
            </div>
            <form @submit.prevent="register" method="post"  class="login-form">
                <input type="text" placeholder="Name" v-model="form.name"/>
                <input type="email" placeholder="Email" v-model="form.email"/>
                <input type="password" placeholder="Password" v-model="form.password"/>
                <input type="password" placeholder="Confirm password" v-model="form.password_confirmation"/>
                <button>Create</button>
                <p class="message">Already registered? 
                    <router-link to="/login" class="nav-link">
                        <p>Sign In</p>
                    </router-link>
                </p>
            </form>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name:'RegistrationPage',
    data(){
        return{
            form:{
                name :'',
                email: '',
                password: '',
                password_confirmation:''
            },
            passwordConfirmationError : '',
            nameError : '',
            emailError : '',
            passwordError :''

        }
    },
    methods:{
        register(){
            if(this.form.password_confirmation != this.form.password){
                this.passwordConfirmationError= 'password does not matched';
            }else{
                axios.post('auth/register', this.form).then((response) =>{
                    this.$router.push({ name: "login"});
                    localStorage.setItem('access-token', response.data.access_token);
                }).catch((error) =>{
                    this.passwordConfirmationError = '';
                    this.nameError = '';
                    this.emailError = '';
                    this.passwordError = '';
                    if(error.response.status == 400){
                        this.nameError = error.response.data.error.name[0];
                        this.emailError = error.response.data.error.email[0];
                        this.passwordError = error.response.data.error.password[0];                        console.log(error.response.data.error.name[0]);
                    }
                })
            }
            
        }
    }
}
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:300);

.login-page {
  width: 100%;
  background: #7a9ed4;
  padding: 8% 0 0;
  margin: auto;
}
.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 400px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4CAF50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,.form button:active,.form button:focus {
  background: #43A047;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 14px;
}
.form .message a {
  color: #4CAF50;
  text-decoration: none;
}
.form .register-form {
  display: none;
}
.container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}
.container:before, .container:after {
  content: "";
  display: block;
  clear: both;
}
.container .info {
  margin: 50px auto;
  text-align: center;
}
.container .info h1 {
  margin: 0 0 15px;
  padding: 0;
  font-size: 36px;
  font-weight: 300;
  color: #1a1a1a;
}
.container .info span {
  color: #4d4d4d;
  font-size: 12px;
}
.container .info span a {
  color: #000000;
  text-decoration: none;
}
.container .info span .fa {
  color: #EF3B3A;
}
body {
  background: #76b852; /* fallback for old browsers */
  background: rgb(141,194,111);
  background: linear-gradient(90deg, rgba(141,194,111,1) 0%, rgba(118,184,82,1) 50%);
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;      
}
</style>