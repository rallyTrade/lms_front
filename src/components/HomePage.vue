<template>
    <Navigation />
    <Topbanner />
    <Courses />
    <Footer />
</template>

<script>
    import Navigation from '../components/Navigation.vue';
    import Topbanner from '../components/Topbanner.vue';
    import Courses from './secondary/Courses.vue';
    import Footer from '../components/Footer.vue'

    export default {
        components: {
            Navigation,
            Topbanner,
            Courses,
            Footer
        }
    }
</script>
<style>
    
</style>