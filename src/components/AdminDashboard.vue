<template>
    <div>
        <div class="container-fluid bg-dark">
            <div class="container">
                <nav class="navbar navbar-expand-sm navbar-light bg-dark">
                    <a class="navbar-brand" href="#">
                        <img src="../assets/logo.svg" alt="">
                    </a>
                    <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse"
                        data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavId">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item text-white">
                                <a class="nav-link text-white" href="#/staff">Create Account</a>
                            </li>
                            <li class="nav-item text-white">
                                <a class="nav-link text-white" href="#/new-video">Upload Video</a>
                            </li>
                            <li class="nav-item text-white">
                                <a class="nav-link text-white" href="#/delete-staff">Delete Account</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            
        }
    },
    components: {

    }
}
</script>
<style>
    li{
        list-style: none;
    }
    .card-title{
        font-size: medium;
    }

    @media (min-width: 768px) {
        
    }
</style>