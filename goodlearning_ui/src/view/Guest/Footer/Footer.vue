<template>
  <div id="footer">
    <div class="row">
      <div class="col-3">
        <b-img
          src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-education-logo-vector-image-png-image_4092977.jpg"
          rounded="circle"
          alt="Circle image"
          style="width: 5rem;"
        ></b-img>
        <span>
          <b>GoodLearning</b>
        </span>
      </div>
      <div class="col-2 offset-6">
          <div class="row">
              <div class="col">
                  <a href="#">terms</a>
              </div>
              <div class="col">
                  <a href="#">policy</a>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
#footer {
  font-family: "Quicksand", sans-serif;
  background-color: white;
  border-bottom: 10px solid red;
  overflow-x: hidden;
}
.link-container {
  position: absolute;
  right: 0;
}
</style>