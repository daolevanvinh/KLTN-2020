<template>
  <div>
    <b-modal hide-footer ref="login-modal" id="login-modal" title="Đăng nhập với tài khoản GoodLearning">
      <div class="row">
        <div class="col-6" style="border-right: 1px solid;">
          <form>
            <input class="form-control" type="email" placeholder="Email" required />
            <input class="form-control" type="password" placeholder="Password" required />
            <button class="btn btn-primary">Đăng Nhập</button>
          </form>
        </div>
        <div class="col-6">
          <button href="#" class="btn fb">
            <i class="fab fa-facebook-f"></i> Login with Facebook
          </button>
          <button href="#" class="btn google">
            <i class="fab fa-google-plus-g"></i> Login with Google+
          </button>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
input,
button {
  width: 92%;
  margin: 0 0.5rem 0.5rem 0.5rem;
}
input:hover,
.btn:hover {
  opacity: 1;
}
.fb {
  background-color: #3b5998;
  color: white;
}
.google {
  background-color: #dd4b39;
  color: white;
}
</style>