<template>
  <div class="body flex justify-center items-center min-h-screen bg-gray-200">
      <div class="wrapper">
          <div
              class="form-container"
              :class="{
                  'form-login': isLoginForm,
                  'form-signup': !isLoginForm,
              }"
          >
              <h2 class="form-title" v-if="isLoginForm">Login</h2>
              <h2 class="form-title" v-else>Sign Up</h2>
              <p class="form-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi, minus!
              </p>
              <form @submit.prevent="submitForm">
                  <div class="form-group">
                      <input
                          type="email"
                          class="form-input"
                          placeholder=""
                          v-model="email"
                      />
                      <label for="" class="form-label">Email address</label>
                      <i class="ri-at-line form-icon"></i>
                  </div>
                  <div class="form-group">
                      <input
                          type="text"
                          class="form-input"
                          placeholder=""
                          v-model="name"
                          v-if="!isLoginForm"
                      />
                      <label for="" class="form-label" v-if="!isLoginForm"
                          >Your Name</label
                      >
                      <i class="ri-user-smile-line form-icon"></i>
                  </div>
                  <div class="form-group">
                      <input
                          type="password"
                          class="form-input"
                          placeholder=""
                          v-model="password"
                      />
                      <label for="" class="form-label">Password</label>
                      <i class="ri-lock-line form-icon"></i>
                  </div>
                  <div class="form-group" v-if="!isLoginForm">
                      <input
                          type="password"
                          class="form-input"
                          placeholder=""
                          v-model="confirmPassword"
                      />
                      <label for="" class="form-label"
                          >Confirm Password</label
                      >
                      <i class="ri-lock-line form-icon"></i>
                  </div>
                  <button type="submit" class="btn-submit">
                      {{ isLoginForm ? "Login" : "Sign Up" }}
                  </button>
              </form>
              <p class="form-button">
                  {{
                      isLoginForm
                          ? "I'm not a member,"
                          : "I'm already a member,"
                  }}
                  <a href="#" class="link-toggle" @click="toggleForm">{{
                      isLoginForm ? "Sign Up" : "Login"
                  }}</a>
              </p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          isLoginForm: true,
          email: "",
          name: "",
          password: "",
          confirmPassword: "",
      };
  },
  methods: {
      toggleForm() {
          this.isLoginForm = !this.isLoginForm;
      },
      submitForm() {
          // Handle form submission here
          // You can access form values using this.email, this.name, this.password, this.confirmPassword
      },
  },
};
</script>

<style scoped>
.body {
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper {
  max-width: 400px;
  width: 100%;
  height: 600px;
  background-color: #ffffff;
  box-shadow: 10 10 30px rgba(0, 0, 0, 0.05);
  position: relative;
}
.wrapper > * {
  @apply absolute top-0 left-0 right-0 bottom-0 bg-white  p-20;
  transform-origin: bottom center;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.05);
}

.form-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
  padding: 20px;
  transform-origin: bottom center;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

.form-login {
  animation-name: hide;
}

.form-signup {
  animation-name: show;
}

@keyframes hide {
  0% {
      z-index: 1;
      transform: rotateZ(0deg);
  }
  50% {
      z-index: 1;
      transform: rotateZ(4deg);
  }
  60% {
      z-index: 0;
  }
  100% {
      z-index: 0;
      transform: rotateZ(2deg);
  }
}

@keyframes show {
  0% {
      z-index: 0;
      transform: rotateZ(2deg);
  }
  50% {
      z-index: 0;
      transform: rotateZ(-2deg);
  }
  60% {
      z-index: 1;
  }
  100% {
      z-index: 1;
      transform: rotateZ(0deg);
  }
}

.form-title {
  margin-bottom: 10px;
  text-align: center;
  font-size: 32px;
  font-weight: 600;
}

.form-desc {
  margin-bottom: 48px;
  text-align: center;
  color: #888888;
}

.form-group {
  position: relative;
  margin-bottom: 20px;
}

.form-input {
  width: 100%;
  outline: none;
  padding: 12px 16px 12px 40px;
  border: 1px solid #cccccc;
  border-radius: 6px;
  font-size: 16px;
  transition: border-color 0.2s;
}

.form-input:focus {
  border-color: #006aff;
}

.form-icon {
  position: absolute;
  top: 50%;
  left: 10px;
  pointer-events: none;
  font-size: 20px;
  color: #cccccc;
  transform: translateY(-50%);
  transition: color 0.2s;
}

.form-label {
  position: absolute;
  top: 50%;
  left: 10px;
  pointer-events: none;
  color: #cccccc;
  transform: translateY(-50%);
  transition: all 0.2s;
}

.form-group:has(.form-input:not(:placeholder-shown)).form-label,
.form-group:focus-within .form-label {
  top: -2px;
  font-size: 14px;
  box-shadow: 8px 0 0 #ffffff, -8px 0 0 #ffffff;
}

.form-group:focus-within .form-label,
.form-group:focus-within .form-icon {
  color: #006aff;
}

.btn-submit {
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: 500;
  font-size: 10px;
  background: #006aff;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  margin-bottom: 48px;
}

.btn-submit:hover {
  background: #0060fe;
}

.form-button {
  text-align: center;
  color: #888888;
}

.form-button a {
  color: #006aff;
  text-decoration: none;
}

.form-button a:hover {
  text-decoration: underline;
}
</style>
