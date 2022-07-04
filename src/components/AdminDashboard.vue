<template>
    <div>
        <div class="leftNavbar position-fixed float-start px-4">
            <div class="w-75 mx-auto my-4">
                <img src="../assets/logo.svg">
            </div>
            <ul>
                <a href="#/staff" class="text-decoration-none"><li class="text-white py-2">Account</li></a>
                <a href="#/coursePg" class="text-decoration-none"><li class="text-white py-2">Course</li></a>
                <a href="#/quiz" class="text-decoration-none"><li class="text-white py-2">Quiz</li></a>
            </ul>
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
        .leftNavbar{
            width: 25%;
            height: 768px;
            background: #666;
        }
        .main-dash{
            width: 75%;
        }
    }
</style>