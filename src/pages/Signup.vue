<template>
    <div class="body flexCenter">
        <div class="wrapper">
            <div class="form-overlay"></div>

            <div
                class="form-signup"
                :class="{
                    show: activeForm === 'signup',
                    hide: activeForm === 'login',
                }"
            >
                <h2 class="form-title">Sign Up</h2>
                <p class="form-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo, cum!
                </p>
                <form action="">
                    <div class="form-group">
                        <input
                            type="email"
                            class="form-input"
                            placeholder=" "
                        />
                        <label for="" class="form-label">Email address</label>
                        <i class="ri-at-line form-icon"></i>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-input" placeholder=" " />
                        <label for="" class="form-label">Your name</label>
                        <i class="ri-user-smile-line form-icon"></i>
                    </div>
                    <div class="form-group">
                        <input
                            type="password"
                            class="form-input"
                            placeholder=" "
                        />
                        <label for="" class="form-label">Password</label>
                        <i class="ri-lock-line form-icon"></i>
                    </div>
                    <div class="form-group">
                        <input
                            type="password"
                            class="form-input"
                            placeholder=" "
                        />
                        <label for="" class="form-label"
                            >Confirm password</label
                        >
                        <i class="ri-lock-line form-icon"></i>
                    </div>
                    <button type="submit" class="btn-submit">Signup</button>
                </form>
                <p class="form-bottom">
                    I'm not a member.
                    <a
                        href="#"
                        class="link-login"
                        @click.prevent="setActiveForm('login')"
                        >Login</a
                    >
                </p>
            </div>
            <div
                class="form-login"
                :class="{
                    show: activeForm === 'login',
                    hide: activeForm === 'signup',
                }"
            >
                <h2 class="form-title">Login</h2>
                <p class="form-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Explicabo, cum!
                </p>
                <form action="">
                    <div class="form-group">
                        <input
                            type="email"
                            class="form-input"
                            placeholder=" "
                        />
                        <label for="" class="form-label">Email address</label>
                        <i class="ri-at-line form-icon"></i>
                    </div>
                    <div class="form-group">
                        <input
                            type="password"
                            class="form-input"
                            placeholder=" "
                        />
                        <label for="" class="form-label">Password</label>
                        <i class="ri-lock-line form-icon"></i>
                    </div>
                    <button type="submit" class="btn-submit">Login</button>
                </form>
                <p class="form-bottom">
                    I'm not a member.
                    <a
                        href="#"
                        class="link-signup"
                        @click.prevent="setActiveForm('signup')"
                        >Signup</a
                    >
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeForm: "signup",
        };
    },
    methods: {
        setActiveForm(form) {
            this.activeForm = form;
        },
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
}
.wrapper > * {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.05);
    padding: 20px;
    transform-origin: bottom center;
}
.wrapper > * > * {
    transition: opacity 0.5s;
    transition-delay: 0.6s;
}
.form-title {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 10px;
    text-align: center;
}
.form-description {
    color: #888;
    margin-bottom: 48px;
    text-align: center;
}
.form-group {
    position: relative;
    margin-bottom: 20px;
}
.form-input {
    width: 100%;
    padding: 12px 16px 12px 40px;
    outline: none;
    border: 1px solid #ccc;
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
    transform: translateY(-50%);
    left: 10px;
    font-size: 20px;
    color: #ccc;
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
    color: #888;
}
.form-group:has(.form-input:not(:placeholder-shown)) .form-label,
.form-group:focus-within .form-label {
    top: -2px;
    font-size: 14px;
    box-shadow: 8px 0 0 #fff, -8px 0 0 #fff;
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
    font-size: 16px;
    background-color: #006aff;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 6px;
    margin-bottom: 48px;
}
.btn-submit:hover {
    background-color: #0060fe;
}
.form-bottom {
    text-align: center;
    color: #888;
}
.form-bottom a {
    color: #006aff;
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
    color: #006aff;
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
