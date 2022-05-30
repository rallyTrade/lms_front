<template>
    <menu class="bg-dark container-fluid m-0">
    <nav class="navbar navbar-expand-sm navbar-light bg-dark container">
        <a class="navbar-brand" href="#">
            <img src="../assets/logo.svg" alt="logo" />
        </a>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
            
        </div>
    </nav>
    </menu>
</template>
<script>
export default {
    
}
</script>
<style>
    .navbar-brand img{ 
        width: 120px;
    }
    @media (min-width: 768px) {
        .navbar-brand img{ 
        width: 150px;
    }
    }
</style>