<template>
    <Navigation />
    <div class="wrap">
        <form action="" class="forgot-form mx-auto">
            <div class="form-group mb-2">
                <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
                <small id="helpId" class="text-muted">Enter Staff ID correctly</small>
            </div>
            <button type="submit" class="btn btn-primary">Reset Password</button>
        </form>
    </div>
    <Footer />
</template>

<script>
import Navigation from '../Navigation.vue';
import Footer from '../Footer.vue';

export default {

    components: {
        Navigation,
        Footer
    }
}
</script>

<style>

.wrap {
    padding-top: 40%;
    padding-bottom: 40%;
}
.forgot-form{
    width: 90%;
}
#helpId{
    font-size: x-small;
    color: #ff4000 !important;
}
@media (min-width: 768px) {
    .wrap {
        padding-top: 20%;
        padding-bottom: 20%;
    }
    .forgot-form{
        width: 50%;
    }
}
</style>