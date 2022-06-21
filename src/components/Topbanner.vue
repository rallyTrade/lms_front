<template>
    <div class="container-fluid topBanner w-100">
        <div class="container">
            <div
                class="col-12 col-md-6 topBannerText d-flex d-md-flex align-items-center animate__animated animate__backInLeft">
                <div class="topBannerTextWrap">
                    <h3 class="text-white text-uppercase">rally trade lms</h3>
                    <p class="text-white">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus pariatur voluptas aliquid
                        temporibus
                        necessitatibus voluptatibus, corporis suscipit deserunt repellendus eius.
                    </p>
                    <div class="btn-project text-center py-2 rounded">
                        <a href="#" class="text-white text-uppercase">explore courses</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container py-2">
        <p class="py-2">
            This program is powered by the <strong>Human Resource Management</strong> with the vision of empowering
            rally staffs, explore available courses and get started.
            Please note, there will be certification of completion on all the courses.
        </p>
    </div>
</template>
<script>
    export default {

    }
</script>
<style>


    .topBanner {
        background: #1a1a1a;
        background-image: url("../assets/topbanner.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-blend-mode: overlay;
        height: 300px;
    }
    .topBannerText{ 
        height: 300px;
    }
    .btn-project {
        background: orangered;
    }

    .btn-project a {
        text-decoration: none;
    }

    @media (min-width: 768px) {
        .topBanner, .topBannerText {
            height: 400px;
        }
    }
</style>