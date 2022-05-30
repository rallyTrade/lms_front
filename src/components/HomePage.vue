<template>
    <Navigation />
    <div class="container-fluid topBanner w-100">
        <div class="container">
            <div class="col-4 topBannerText d-md-flex align-items-center">
                <h3 class="text-white">Welcome To LMS</h3>
            </div>
        </div>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
// import Navigation from 'Navigation.vue'

export default {
    components: {
        Navigation
    }
}
</script>
<style>
    .topBanner{ 
        height: auto;
    }

    @media (min-width: 768px) {
        .topBanner{
            background: #1a1a1a;
            background-image: url("../assets/topbanner.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            background-blend-mode: overlay;
            height: 500px;
        }
    }
</style>