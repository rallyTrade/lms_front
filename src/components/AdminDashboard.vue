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

        <div class="container ad-card">
            <div class="card-list m-2 m-md-4 float-start shadow-sm rounded text-center">
                <div class="card-list-img">
                    <img src="../assets/create-acct.png" alt="" class="w-100">
                </div>
                <div class="ad-card-title">
                    <h5 class="fw-bold text-uppercase">Create New Account</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>
                <a href="#/staff" class="text-decoration-none bg-blue p-2 text-white" style="background: blue; border-radius: 5px;">Create
                    Account</a>
            </div>
            <div class="card-list m-2 m-md-4 float-start shadow-sm rounded text-center">
                <div class="card-list-img">
                    <img src="../assets/upload-res.png" alt="" class="w-100">
                </div>
                <div class="ad-card-title">
                    <h5 class="fw-bold text-uppercase">upload new resource</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>
                <a href="#/new-video" class="text-decoration-none bg-blue p-2 text-white"
                    style="background: blue; border-radius: 5px;">Upload Resource</a>
            </div>
            <div class="card-list m-2 m-md-4 float-start shadow-sm rounded text-center">
                <div class="card-list-img">
                    <img src="../assets/delete-staff.png" alt="" class="w-100">
                </div>
                <div class="ad-card-title">
                    <h5 class="fw-bold text-uppercase">Delete staff account</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>
                <a href="#/delete-staff" class="text-decoration-none bg-blue p-2 text-white"
                    style="background: blue; border-radius: 5px;">Delete Account</a>
            </div>
            <div class="card-list m-2 m-md-4 float-start shadow-sm rounded text-center">
                <div class="card-list-img">
                    <img src="../assets/update-acct.png" alt="" class="w-100">
                </div>
                <div class="ad-card-title">
                    <h5 class="fw-bold text-uppercase">Update staff account</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>
                <a href="#/update-staff" class="text-decoration-none bg-blue p-2 text-white"
                    style="background: blue; border-radius: 5px;">Update Account</a>
            </div>
            <div class="card-list m-2 m-md-4 float-start shadow-sm rounded text-center">
                <div class="card-list-img">
                    <img src="../assets/staff-list.png" alt="" class="w-100">
                </div>
                <div class="ad-card-title">
                    <h5 class="fw-bold text-uppercase">staff list</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                </div>
                <a href="#/view-staff" class="text-decoration-none bg-blue p-2 text-white"
                    style="background: blue; border-radius: 5px;">View Account</a>
            </div>
        </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                "card-title": "Create Staff Account"
            }
        },
        components: {

        }
    }
</script>
<style>
.ad-card {
    padding-top: 5%;
}

    li {
        list-style: none;
    }
        .card-list{
            height: 260px;
        }
@media (min-width: 768px) {
    .card-list {
        width: 40%;
        height: 260px;
    }
        .navbar-nav {
            margin-left: auto;
        }
}
    @media (min-width: 1024px) {
        .navbar-nav{
            margin-left: auto;
        }
        .card-list {
            width: 28%;
            height: 300px;
        }
    }
</style>