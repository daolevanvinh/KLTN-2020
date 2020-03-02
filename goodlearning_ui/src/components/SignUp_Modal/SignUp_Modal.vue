<template>
  <div>
    <b-modal ref="signup-modal" hide-footer id="singup-modal" title="Tài khoản GoodLearning">
      <form action="#">
        <div class="inputWithIcon">
          <input class="form-control" v-model="user.name" placeholder="Họ Tên" type="text" required />
          <i class="fa fa-user fa-lg" aria-hidden="true"></i>
        </div>
        <div class="inputWithIcon">
          <input class="form-control" v-model="user.id" placeholder="Email" type="email" required />
          <i class="fas fa-envelope-square fa-lg" aria-hidden="true"></i>
        </div>
        <div class="inputWithIcon">
          <input
            class="form-control"
            v-model="user.password"
            placeholder="Mật khẩu"
            type="password"
            required
          />
          <i class="fas fa-lock fa-lg" aria-hidden="true"></i>
        </div>
        <h6
          style="color: red;"
          v-if="!loadNotificationPassword"
        >Mật khẩu phải gồm chữ cái thường, hoa, số, ký tự đặc biệt và tối thiểu 6 ký tự</h6>
        <h6 style="color: green;" v-if="loadNotificationPassword">Mật khẩu hợp lệ</h6>

        <button style="width: 100%;margin-top:1rem" class="btn btn-danger">Đăng Ký</button>
      </form>
      <hr />
      <h6>
        Đã có tài khoản?
        <a href="#" ref="btnShow" @click="showModalLogin()">Đăng Nhập</a>
      </h6>
    </b-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        id: "",
        name: "",
        password: ""
      },
      //eslint-disable-next-line
      strRegex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/
    };
  },
  methods: {
    checkPassword() {
      return this.user.password.match(this.strRegex);
    },
    hideModal() {
      this.$refs["signup-modal"].hide();
    },
    showModal() {
      this.$refs["signup-modal"].show();
    },
    showModalLogin() {
      this.hideModal();
      this.$root.$emit("bv::show::modal", "login-modal", "");
    }
  },
  computed: {
    loadNotificationPassword() {
      return this.checkPassword();
    }
  }
};
</script>
<style lang="scss" scoped>
input {
  padding-left: 50px;
  height: 3rem;
}
.inputWithIcon,
h6 {
  position: relative;
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
  i {
    position: absolute;
    margin-left: 0.9rem;
    margin-top: -1.8rem;
  }
}
</style>