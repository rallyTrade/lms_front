<template>
    <div class="container-fluid topBanner w-100">
        <div class="container">
            <div
                class="col-12 col-md-6 topBannerText d-flex d-md-flex align-items-center animate__animated animate__backInLeft">
                <div class="topBannerTextWrap">
                    <h3 class="text-white text-uppercase" style="letter-spacing: 0.1em;">rally trade lms</h3>
                    <div class="text-white fs-6 my-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus pariatur voluptas aliquid
                        temporibus
                        necessitatibus voluptatibus, corporis suscipit deserunt repellendus eius.
                    </div>
                    <div class="btn-project text-center py-2 rounded">
                        <a href="#" class="text-white text-uppercase" style="letter-spacing: 0.2em;">explore courses</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>

.topBanner {
    background: #1a1a1a;
    background-image: url("../assets/topbanner.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: overlay;
    height: 300px;
}

.topBannerText {
    height: 300px;
}

.btn-project {
    background: orangered;
}

.btn-project a {
    text-decoration: none;
}

@media (min-width: 768px) {

    .topBanner,
    .topBannerText {
        height: 400px;
    }
}

a {
    color: #1a1a1a;
}

</style>