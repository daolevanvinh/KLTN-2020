<template>
  <div id="header">
    <b-navbar v-if="!login" toggleable="lg" type="light" variant="default">
      <b-navbar-brand :href="baseURL">
        <div>
          <b-img
            src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-education-logo-vector-image-png-image_4092977.jpg"
            rounded="circle"
            alt="Circle image"
            style="width: 5rem;"
          ></b-img>

          <span>
            <b>GoodLearning</b>
          </span>

          <span></span>
        </div>
      </b-navbar-brand>
      <div style="margin-top: -0.3rem">
        <button class="btn btn-category" id="popover-target-1">
          <i class="fa fa-bars" aria-hidden="true"></i>
          &nbsp;
          <b>Category</b>
        </button>
        <b-popover target="popover-target-1" triggers="hover" placement="bottom">
          <ul class="menu-category">
            <li class="text-left">
              <div class="row">
                <div class="col-2">
                  <b-icon-code-slash font-scale="2"></b-icon-code-slash>
                </div>
                <div class="col-9 offset-1">
                  <span style="font-size: 14pt">Development</span>
                </div>
              </div>
            </li>
          </ul>
        </b-popover>
      </div>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav>
          <b-input-group style="margin-left: 5rem;width: 25rem;">
            <b-form-input style type="text" id="input-search" placeholder="Tìm kiếm"></b-form-input>
            <b-input-group-append>
              <b-button variant="outline-info">
                <b-icon-search></b-icon-search>
              </b-button>
            </b-input-group-append>
          </b-input-group>

          <button style="width: auto;margin-left: 1.5rem;" class="btn btn-category">Miễn Phí</button>
          <button style="width: auto;margin-left: 1.5rem;" class="btn btn-category">Dịch Vụ</button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
import apiConfig from "../../../API/api.json";
export default {
  data() {
    return {
      baseURL: "",
      login: false
    };
  },
  created() {
    this.baseURL = apiConfig.baseURL;
  }
};
</script>
<style lang="scss" scoped>
#header {
  font-family: "Quicksand", sans-serif;
  overflow-x: hidden;
}
.btn-category {
  background-color: white;
  width: 100%;
  height: 100%;
  &:hover {
    background-color: #d5dadc;
    border-radius: 5px;
  }
}
.menu-category {
  list-style: none;
  padding: 0;
  margin: 0;
  > li {
    padding: 0;
    margin: 0;
  }
}
.btn-search {
  color: red;
  margin: 0;
  padding-top: 0.5rem;
  margin-left: -2.2rem;
  &:hover {
    cursor: pointer;
  }
}
#input-search {
  background-color: #d5dadc;
  &:focus {
    background-color: white;
  }
}
</style>