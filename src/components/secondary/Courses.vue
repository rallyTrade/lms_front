<template>
    <div class="container" style="margin-bottom: 100px;">
        <h4 class="text-uppercase fw-bold my-3" style="letter-spacing: 0.1em;">Available courses</h4>
        <div class="col-md-12 my-4 text-center">

            <div v-if="Loader" class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>

            <div v-else-if="listCourses.status == 404 || !Loader">
                <p>No courses available!</p>
            </div>

            <div v-else class="col-md-4 px-2 px-md-4 cg" v-for="item in listCourses.Items" :key="item.id">
                <div class="mc pb-4">
                    <div class="ci w-100">
                        <img src="@/assets/course1.jpg" alt="course image" class="w-100" />
                    </div>
                    <div class="ct text-center my-2">
                        <h5 class="text-uppercase">Course title</h5>
                    </div>
                    <div class="cb px-4 py-1 border rounded text-center w-75 mx-auto"><a href="#"
                            class="text-decoration-none text-capitalize" style="letter-spacing: 0.1em;">start
                            course</a></div>
                </div>
            </div>
        </div>

        <div align="center" class="my-4" v-if="listCourses.Items">
            <a href="#" class="py-2 px-4 bg-dark text-white text-decoration-none rounded">Explore More</a>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

    export default {
        data() {
            return {
                Loader: true
            }
        },
        computed: {
            ...mapGetters({
                listCourses: 'Courses/getCoursesList'
            })
        },
        created() {
            this.$store.dispatch('Courses/getCourses').then(() => {
                this.Loader = false
            })
        }
    }
</script>
<style>
    a{ 
        color: #1a1a1a;
    }
    .cg {
        float: none;
        margin: 10px 0 40px 0;
    }
    .mc{ 
        box-shadow: 1px 0 3px #cccccc;
    }
    .ct h5 {
        font-size: .9rem;
    }
    
    .cb a {
        font-size: .8rem;
    }
    @media (min-width:768px) {
        .cg {
            float: left;
        }
    }
    @media (min-width:1024px) {
    
        .ct h5 {
            font-size: 1rem;
        }
    
        .cb a {
            font-size: .9rem;
        }
    }

    
    
</style>