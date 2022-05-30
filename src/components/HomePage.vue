<template>
    <Navigation />
    <Topbanner />
    <Courses />
</template>

<script>
    import Navigation from '../components/Navigation.vue';
    import Topbanner from '../components/Topbanner.vue';
    import Courses from '../components/Courses.vue'

    export default {
        components: {
            Navigation,
            Topbanner,
            Courses
        }
    }
</script>
<style>
    
</style>