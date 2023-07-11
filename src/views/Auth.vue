<template>
    <div class="body flexCenter">
        <div class="wrapper">
            <div class="form-overlay"></div>
            <div
                class="form-login"
                :class="{
                    show: activeForm === 'login',
                    hide: activeForm === 'signup',
                }"
            >
                <div class="flexCenter">
                    <img alt="logo" src="ani.png" width="100" height="100" />
                </div>
                <h2 class="form-title">Login</h2>
                <div class="mb-4 flexCenter text-red-500 font-bold text-l">
                    <v-alert v-if="error"
                        >Email or password are incorect!</v-alert
                    >
                </div>
                <form @submit.prevent="handleLogin">
                    <div class="form-group">
                        <input
                            type="text"
                            class="form-input"
                            v-model="username"
                            placeholder=" "
                        />
                        <label class="form-label">Email address</label>
                        <i class="ri-at-line form-icon"></i>
                    </div>
                    <div class="form-group">
                        <input
                            type="password"
                            class="form-input"
                            placeholder=" "
                            v-model="password"
                        />
                        <label class="form-label">Password</label>
                        <i class="ri-lock-line form-icon"></i>
                    </div>
                    <button type="submit" class="btn-submit">Login</button>
                </form>
                <p class="form-bottom">
                    Don't have account ?
                    <a
                        href="#"
                        class="link-signup"
                        @click.prevent="setActiveForm('signup')"
                        >Signup</a
                    >
                </p>
            </div>
            <div
                class="form-signup"
                :class="{
                    show: activeForm === 'signup',
                    hide: activeForm === 'login',
                }"
            >
                <div class="flexCenter">
                    <img alt="logo" src="ani.png" width="100" height="100" />
                </div>

                <h2 class="form-title">Sign Up</h2>
                <form @submit.prevent="handleRegister">
                    <div class="form-group">
                        <input
                            type="email"
                            class="form-input"
                            placeholder=" "
                            v-model="username"
                            required
                        />
                        <label class="form-label">Email address</label>
                        <i class="ri-at-line form-icon"></i>
                    </div>
                    <div class="form-group">
                        <input
                            type="text"
                            class="form-input"
                            placeholder=" "
                            v-model="profileName"
                            required
                        />
                        <label class="form-label">Your name</label>
                        <i class="ri-user-smile-line form-icon"></i>
                    </div>
                    <div class="form-group">
                        <input
                            type="password"
                            class="form-input"
                            placeholder=" "
                            v-model="password"
                            required
                        />
                        <label class="form-label">Password</label>
                        <i class="ri-lock-line form-icon"></i>
                    </div>
                    <div class="form-group">
                        <input
                            type="password"
                            class="form-input"
                            placeholder=" "
                            v-model="confirmPassword"
                            required
                        />
                        <label class="form-label">Confirm password</label>
                        <i class="ri-lock-line form-icon"></i>
                    </div>
                    <div class="-mt-[12px] flexCenter text-red-500 font-bold text-md">
                        <v-alert v-if="error" class="text-center">{{
                            error.message
                        }}</v-alert>
                    </div>
                    <button type="submit" class="btn-submit mt-[13px]">Signup</button>
                </form>
                <p class="form-bottom -mt-[40px]">
                    Have account ?
                    <a
                        href="#"
                        class="link-login"
                        @click.prevent="setActiveForm('login')"
                        >Login</a
                    >
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            activeForm: "login",
            username: "",
            profileName: "",
            password: "",
            confirmPassword: "",

            error: false,
        };
    },
    methods: {
        async handleLogin() {
            try {
                const response = await axios.post("auth/login", {
                    username: this.username,
                    password: this.password,
                });
                if (response.status == 200) {
                    localStorage.setItem(
                        "accessToken",
                        response.data.data.token
                    );
                    localStorage.setItem(
                        "user-info",
                        response.data.data.username
                    );
                    this.$router.push("/");
                }
            } catch (error) {
                this.error = true;
                console.log(error);
            }
        },
        async handleRegister() {
            if (this.password !== this.confirmPassword) {
                this.error = {
                    message: "Password doesn't match!",
                };
                return;
            }
            if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(this.password)) {
                this.error = {
                    message:
                        "Password must contain at least 6 characters, including uppercase and lowercase letters.",
                };
                return;
            }
            try {
                await axios.post("auth/register", {
                    username: this.username,
                    profileName: this.profileName,
                    password: this.password,
                });
                this.username = "";
                this.password = "";
                this.activeForm = "login";
            } catch (error) {
                this.error = true;
                console.log(error);
            }
        },
        setActiveForm(form) {
            this.activeForm = form;
            this.username = "";
            this.profileName = "";
            this.password = "";
            this.confirmPassword = "";
        },
    },
    mounted() {
        let user = localStorage.getItem("user-info");
        if (user) {
            this.$router.push("/");
        }
    },
};
</script>
<style scoped>
.body {
    @apply min-h-screen bg-abu;
}

/* start: Form */
.wrapper {
    max-width: 400px;
    width: 100%;
    height: 600px;
    position: relative;
    perspective: 1000px;
    transform-style: preserve-3d;
    border-radius: 6px;
    border: 1px solid #c4ab89;
    padding: 6px;
}
.wrapper > * {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    box-shadow: 9px 12px 18px 0px rgba(184, 126, 43, 1);
    padding: 20px;
    transform-origin: bottom center;
    border-radius: 6px;
    border: 1px solid #e7b875;
    padding: 6px;
}
.wrapper > * > * {
    transition: opacity 0.4s;
    transition-delay: 0.4s;
}
.form-title {
    font-size: 42px;
    font-weight: 800;
    margin-bottom: 10px;
    text-align: center;
    color: #534025;
    text-shadow: 3px -2px 0px rgba(244, 176, 80, 0.63);
}

.form-group {
    position: relative;
    margin-bottom: 20px;
}
.form-input {
    width: 100%;
    padding: 12px 16px 12px 40px;
    outline: none;
    border: 2px solid #81643e;
    border-radius: 6px;
    font-size: 16px;
    transition: border-color 0.2s;
}
.form-input:focus {
    @apply border-2 border-gold
  /* border-color: #006aff; */;
}
.form-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
    font-size: 20px;
    color: #81643e;
    pointer-events: none;
    transition: color 0.2s;
}
.form-label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 40px;
    pointer-events: none;
    transition: all 0.2s;
    background-color: #fff;
    color: #81643e;
}
.form-group:has(.form-input:not(:placeholder-shown)) .form-label,
.form-group:focus-within .form-label {
    top: -2px;
    font-size: 14px;
    box-shadow: 8px 0 0 #fff, -8px 0 0 #fff;
}
.form-group:focus-within .form-label,
.form-group:focus-within .form-icon {
    color: #f4b050;
}
.btn-submit {
    padding: 12px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-weight: 800;
    font-size: 16px;
    background-color: #d68c25;
    color: #fff;
    border: 2px solid #81643e;
    cursor: pointer;
    border-radius: 6px;
    margin-bottom: 48px;
}
.btn-submit:hover {
    background-color: #925a0b;
}
.form-bottom {
    text-align: center;
    color: #81643e;
}
.form-bottom a {
    color: #915809;
    font-weight: 800;
    text-decoration: none;
}
.form-bottom a:hover {
    text-decoration: underline;
}

.form-signup {
    z-index: 0;
    transform: rotateZ(2deg);
}
.form-signup > * {
    opacity: 0;
}
.form-login {
    z-index: 1;
    transform: rotateZ(0deg);
}
.form-login > * {
    opacity: 1;
}
.wrapper > .hide {
    animation: hide 1s ease-in-out forwards;
}
.wrapper > .show {
    animation: show 1s ease-in-out forwards;
}
.wrapper > .hide > * {
    opacity: 0;
}
.wrapper > .show > * {
    opacity: 1;
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
/* end: Form */
.form-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(247, 246, 246, 0.884);
    transform-origin: bottom center;
    transform: rotateZ(2deg);
    z-index: -1;
}
.show {
    opacity: 1;
    z-index: 1;
}

.hide {
    opacity: 0;
    z-index: 0;
}

.form-signup.show,
.form-login.hide {
    transform: rotateZ(-2deg);
}

.form-signup.hide,
.form-login.show {
    transform: rotateZ(0deg);
}

.form-group:focus-within .form-label,
.form-group:focus-within .form-icon {
    color: #f4b050;
}

.form-signup.show .form-overlay,
.form-login.show .form-overlay {
    animation: overlayShow 1s ease-in-out forwards;
}

.form-signup.hide .form-overlay,
.form-login.hide .form-overlay {
    animation: overlayHide 1s ease-in-out forwards;
}

@keyframes overlayShow {
    0% {
        opacity: 0;
        z-index: 0;
    }
    100% {
        opacity: 1;
        z-index: 1;
    }
}

@keyframes overlayHide {
    0% {
        opacity: 1;
        z-index: 1;
    }
    100% {
        opacity: 0;
        z-index: 0;
    }
}
@keyframes swapForms {
    0% {
        transform: rotateY(0deg);
    }
    50% {
        transform: rotateY(180deg);
    }
    100% {
        transform: rotateY(0deg);
    }
}

.form-signup.show .form-overlay,
.form-login.show .form-overlay {
    animation: overlayShow 1s ease-in-out forwards,
        swapForms 1s ease-in-out forwards;
}

.form-signup.hide .form-overlay,
.form-login.hide .form-overlay {
    animation: overlayHide 1s ease-in-out forwards,
        swapForms 1s ease-in-out forwards;
}
</style>
