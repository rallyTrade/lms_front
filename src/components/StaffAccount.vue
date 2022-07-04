<template>
    <div class="wrap mx-auto">
        <h4 class="text-center">Create Account</h4>
        <form action="" method="post">
            <div class="form-group">
                <label for="">Name</label>
                <div class="d-name">
                    <input type="text" name="" id="" class="form-control" required placeholder="First Name">
                    <input type="text" name="" id="" class="form-control" required placeholder="Last Name">
                </div>
            </div>
            <div class="form-group">
                <label for="">Staff ID</label>
                <input type="text" name="" id="" class="form-control" required placeholder="" aria-describedby="helpId">
                <small id="helpId" class="text-muted">Enter staff ID here!</small>
            </div>
            <div class="form-group">
                <label for="">Password</label>
                <input type="text" name="" id="" class="form-control" required placeholder="" aria-describedby="helpId">
                <small id="helpId" class="text-muted">Staff will be required to change password</small>
            </div>
            <button type="submit" class="btn btn-primary w-100">Create</button>
        </form>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>

.wrap{
    width: 90%;
    padding: 10px;
}
.d-name {
    display: block;
}
.d-name input{
    width: 100%;
    margin-bottom: 6px;
}
.d-name input:nth-child(1) {
    margin-right: 0;
}
@media (min-width: 768px) {
    .wrap {
        width: 50%;
        padding: 20px;
    }
    .d-name{
        display: flex;
    }
    .d-name input{
        width: 90%;
    }
    .d-name input:nth-child(1){
        margin-right: 5px;
    }
}
</style>