<template>
    <menu class="bg-dark m-0">
        <nav class="navbar navbar-expand-sm navbar-light bg-dark container d-flex justify-content-between">
            <a class="navbar-brand">
                <img src="../assets/logo.svg" alt="logo" />
            </a>
            <div class="text-white d-flex align-items-center" style="cursor: pointer;">
                <i class="fa-solid fa-cubes text-white fs-4"></i>
                <span class="mx-2">Available Courses</span>
            </div>
            <div>
                <button class="btn btn-outline-light text-uppercase" href="#/login"
                    style="letter-spacing: 0.2em;">Login</button>
            </div>
        </nav>
    </menu>
    <HeaderContent />
    <div class="container py-2">
        <p class="py-2 text-center my-3">
            This program is powered by the <strong>Human Resource Management</strong> with the vision of empowering
            rally staffs, explore available courses and get started.
            Please note, there will be certification of completion on all the courses.
        </p>
    </div>
    <div class="container">
        <router-view />
    </div>

    <div class="footer bg-dark d-flex align-items-center">
        <div class="container">
            <p class="text-white text-center m-0">All rights reserved &copy; RallyTrade</p>
        </div>
    </div>
</template>
<script>
import HeaderContent from './HeaderContent.vue';
export default {
    components: { HeaderContent }
}
</script>
<style lang="scss" scoped>

.navbar-toggler:focus {
    outline: none;
    box-shadow: none;
}

.navbar-brand img {
    width: 150px;
}

.footer {
    position: fixed;
    bottom: 0;
    height: 50px;
    width: 100%;
}
</style>