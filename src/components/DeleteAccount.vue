<template>
    <div class="delete-wrap">
        <form action="" class="delete-forgot-form mx-auto">
            <h4 class="text-center">Delete Staff Account</h4>
            <select class="form-select mb-2" aria-label="Default select example">
                <option selected>Select Staff</option>
                <option value="1">FRNG/2021/001</option>
                <option value="2">FRNG/2021/002</option>
            </select>
            <button type="submit" class="btn btn-primary w-100">Delete Account</button>
        </form>
    </div>
</template>

<script>

export default {


}
</script>

<style>
.delete-wrap {
    padding-top: 40%;
    padding-bottom: 40%;
}

.delete-forgot-form {
    width: 90%;
}

#helpId {
    font-size: x-small;
    color: #ff4000 !important;
}

@media (min-width: 768px) {
    .delete-wrap {
        padding-top: 18%;
        padding-bottom: 18%;
    }

    .delete-forgot-form {
        width: 50%;
    }
}
</style>