<template>
    <Navigation />
    <div>
        <div class="container-fluid px-0">
            <div class="left-banner float-none float-md-start">
                <img src="../assets/topbanner.jpg" alt="" class="w-100">
            </div>
            <div class="login-form float-none float-md-start">
                <form action="" class="p-4">
                    <div class="form-group">
                        <label for=""></label>
                        <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId"
                            placeholder="">
                        <small id="emailHelpId" class="form-text text-muted">Staff ID</small>
                    </div>
                    <div class="form-group">
                        <label for=""></label>
                        <input type="password" class="form-control" name="" id="" placeholder="">
                        <small id="passwordHelpId" class="form-text text-muted">Password</small>
                        <i><a class="forgetPass text-decoration-none mx-2" href="#/forgotpassword">forget
                                password</a></i>
                    </div>
                    <button type="submit" class="btn btn-primary w-100 mt-2">Login</button>
                </form>
            </div>
        </div>
    </div>
    <Footer />
</template>
<script>
import Navigation from '../components/Navigation.vue'

export default {
    components: {
        Navigation
    },
    data() {
        return {
            
        }
    },
    
}
</script>
<style>

 .left-banner,
 .login-form{
    width: 100%;
 }
 .forgetPass{
    color: #ff4000;
    font-size: x-small;
 }
 .form-control:focus, btn:focus{
    outline: none;
    box-shadow: none;
 }
 @media (min-width: 768px) {
    .left-banner,
        .login-form {
            width: 50%;
        }
 }
</style>