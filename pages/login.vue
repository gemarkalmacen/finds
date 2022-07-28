<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-7 b-center bg-size" :style="{ backgroundImage: 'url('+ require('assets/images/login/financial.png') +')' }"
          style="background-size: cover; background-position: center center; display: block;">
        <img
          class="bg-img-cover bg-center"
          src="~assets/images/login/financial.png"
          alt="looginpage"
          style="display: none;"
        />
      </div>
      <div class="col-xl-5 p-0">
        <div class="login-card">
          <div>
            <div>
              <a class="logo text-left">
                <img
                  class="img-fluid for-light"
                  style="width: 384px;"
                  src="~assets/images/logo/finds.png"
                  alt="looginpage"
                />
                <img
                  class="img-fluid for-dark"
                  style="width: 384px;"
                  src="~assets/images/logo/finds_dark.png"
                  alt="looginpage"
                />
              </a>
            </div>
            <div class="login-main login-form-card">
              <form class="theme-form">
                <h4>Sign in to account</h4>
                <p>Enter your email & password to login</p>
                <div class="form-group">
                  <label class="col-form-label">Email Address</label>
                  <input
                    class="form-control"
                    type="email"
                    required=""
                    placeholder="Test@gmail.com"
                  />
                </div>
                <div class="form-group">
                  <label class="col-form-label">Password</label>
                  <input
                    class="form-control"
                    type="password"
                    name="login[password]"
                    required=""
                    placeholder="*********"
                  />
                  <div class="show-hide"><span class="show"> </span></div>
                </div>
                <div class="form-group mb-0">
                  <div class="checkbox p-0">
                    <input id="checkbox1" type="checkbox" />
                    <label class="text-muted" for="checkbox1"
                      >Remember password</label
                    >
                  </div>
                  <button class="btn btn-primary btn-block" type="submit" @click.prevent="login">
                    Sign in
                  </button>
                </div>
                <h6 class="text-muted mt-4 or">Or Login in with</h6>
                <div class="social mt-4">
                  <div class="btn-showcase">
                    <a class="btn btn-light w-100">
                      <img src="~assets/images/login/ISSO.png" style="width: 25px;">
                      ISSO
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      form: {
        email: '',
        password: '',
      },
      errors: {
        email: '',
        password: '',
        message: '',
      }
    }
  },
  layout: 'empty',
  methods: {
    login(){
        this.$auth
          .loginWith('local', {
            data: this.form
        })
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
}
</script>