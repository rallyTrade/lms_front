<template>
    <div class="wrap mx-auto">
        <h4>Lesson Video Portal</h4>
        <p>
            You are accessing this page because you have admin priviledge. Upload your videos here!
        </p>
        <form action="" method="post" enctype="multipart/form-data" class="mx-auto">
            <div class="form-group">
              <label for="">Lesson Title</label>
              <input type="text" name="" id="" class="form-control" required placeholder="" aria-describedby="helpId">
              <small id="helpId" class="text-muted">Lesson video title goes here!</small>
            </div>
            <div class="form-group">
              <label for="">Video Description</label>
              <input type="text" name="" id="" class="form-control" required placeholder="" aria-describedby="helpId">
              <small id="helpId" class="text-muted">Description goes here! &nLeftarrow;200 words</small>
            </div>
            <div class="form-group">
              <label for="" class="mb-1">Upload Video</label>
              <input type="file" class="form-control-file w-100 pointer-cursor" required name="" id="" placeholder="" aria-describedby="fileHelpId">
              <small id="fileHelpId" class="form-text text-muted">File Type: mp4, og</small>
            </div>
            <button type="submit" class="btn btn-primary w-100 mt-4">Upload Now</button>
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
.form-text{
    font-size: x-small;
        color: #ff4000 !important;
}
@media (min-width: 768px) {
    .wrap{
        width: 50%;
        padding: 20px;
    }
}
</style>