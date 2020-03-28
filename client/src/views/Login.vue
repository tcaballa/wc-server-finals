<template>
<div class="wholelog">
    <div class="mainlog">
    <div class='col-lg-4'>
        <div class='row'>
            <div class ='col-md-9'>
            <br>
        <h2> Login </h2>
       <form @submit.prevent = 'loginuser'>
        <div class ='form-group text-left'>
            <label for = 'User Name'>User Name</label>
            <input type ='text' name='username' id= 'username' placeholder='Enter Username' v-model='username' class='form-control'/>
            <p id ="required_username">{{username_validation}}</p>
        </div>
        <div class ='form-group text-left'>
            <label for = 'Password'>Password</label>
            <input type ='password' name='pswd' id= 'pswd' placeholder='Enter Password' v-model='pswd' class='form-control'/>
            <p id ="required_pswd">{{pswd_validation}}</p>       
        </div>
        <br>
        <div class="buton">
        <button type="submit" class="btn btn-primary">Login</button> &nbsp; &nbsp;
         <button type="reset" class="btn btn-primary">Clear</button><br><br>
         <p> <a href="/Signup"> Not still a member? </a></p> <br>
        </div>
        </form>
        </div>
    </div>
    </div>
    </div>
    <footer id="footerlog"> 
    COPYRIGHT &copy; WEEABOO 2020 | ALL RIGHTS RESERVED.
</footer>
</div>
</template>

<script>
export default {
    data () {
        return  {
            username: '',
            pswd: '',
            username_validation: '',
            pswd_validation: '',
        }
    },
    methods: {
        loginuser() {
            if (this.username === '') {
                this.username_validation = 'Please enter your username. '
            }
            else if (this.pswd === '') {
                this.pswd_validation = 'Please enter your password. '
            }
            else {
                this.loginuser()
             }
        }
    }
}
</script>
<style>
#required_username, #required_pswd {
    color: red;
}
.wholelog {
    height: 100vh;
    background-image: url('../assets/kimi.png');
    background-size: cover;
    border-top: 1px solid gray;
}
.col-md-9 {
    margin: auto;
}
.col-lg-4 {
    top: 6em;
    background-color: white;
    margin: auto;
    -webkit-box-shadow: 10px 10px 33px 8px rgba(61,61,61,1);
    -moz-box-shadow: 10px 10px 33px 8px rgba(61,61,61,1);
    box-shadow: 10px 10px 33px 8px rgba(61,61,61,1);
    border-radius: 25px 25px 25px 25px;
}
.mainlog {
    padding-bottom: 2.5rem;
}
#footerlog {
    text-align: center;
    color: black;
    font-size: 1em;
    position: relative;
    top:15em;
    align-self: center; 
}
 h2 {
    text-align: center;
}
.buton {
    text-align: center;
} 
</style>