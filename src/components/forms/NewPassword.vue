<template>
    <div class="wrap">
        <form action="" class="forgot-form mx-auto">
            <h4>Create New Password</h4>
            <div class="form-group mb-2">
                <input type="password" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
                <small id="helpId" class="text-muted">New Password</small>
            </div>
            <div class="form-group mb-2">
                <input type="password" name="" id="" class="form-control" placeholder="" aria-describedby="helpId">
                <small id="helpId" class="text-muted">Confirm Password</small>
            </div>
            <button type="submit" class="btn btn-primary">Reset Password</button>
        </form>
    </div>
</template>

<script>

export default {


}
</script>

<style>
.wrap {
    padding-top: 40%;
    padding-bottom: 40%;
}

.forgot-form {
    width: 90%;
}

#helpId {
    font-size: x-small;
    color: #ff4000 !important;
}

@media (min-width: 768px) {
    .wrap {
        padding-top: 18%;
        padding-bottom: 18%;
    }

    .forgot-form {
        width: 50%;
    }
}
</style>