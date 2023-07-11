<template>
  
      
        <section id="sidebar" :class="{ hide: isSidebarHidden }">
            <!-- <a href="#" class="brand">
          </a> -->
            <!-- <i class="bx bxs-wink-smile"></i>
            <span class="text">Alfaeeza</span> -->

            <div class="logo mt-10 ml-4">
                <img
                    alt="logo"
                    src="ani.png"
                    class="text"
                    width="100"
                    height="100"
                />
            </div>

            <ul class="side-menu top">
                <li :class="{ active: activeMenuItem === 'dashboard' }">
                    <router-link to="/" @click="setActiveMenuItem('dashboard')">
                        <i class="bx bxs-dashboard"></i>
                        <span class="text">Dashboard</span>
                    </router-link>
                </li>
                <li :class="{ active: activeMenuItem === 'product' }">
                    <router-link
                        to="/products"
                        @click="setActiveMenuItem('product')"
                    >
                        <i class="bx bxs-shopping-bag-alt"></i>
                        <span class="text">Products</span>
                    </router-link>
                </li>
                <li :class="{ active: activeMenuItem === 'supplier' }">
                    <router-link
                        to="/suppliers"
                        @click="setActiveMenuItem('supplier')"
                    >
                        <i class="bx bxs-doughnut-chart"></i>
                        <span class="text">Suppliers</span>
                    </router-link>
                </li>
                <!-- <li :class="{ active: activeMenuItem === 'message' }">
          <router-link to="#" @click="setActiveMenuItem('message')">
            <i class="bx bxs-message-dots"></i>
            <span class="text">Message</span>
          </router-link>
        </li>
        <li :class="{ active: activeMenuItem === 'team' }">
          <router-link to="#" @click="setActiveMenuItem('team')">
            <i class="bx bxs-group"></i>
            <span class="text">Team</span>
          </router-link>
        </li> -->
            </ul>
            <ul class="side-menu">
                <li>
                    <router-link to="#">
                        <i class="bx bxs-cog"></i>
                        <span class="text">Settings</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="#" class="logout" @click="logout">
                        <i class="bx bxs-log-out-circle"></i>
                        <span class="text">Logout</span>
                    </router-link>
                </li>
            </ul>
            <span class="absolute top-[92%] left-4 font-bold  text-lg mr-4 bg-gold p-2 rounded-lg">
                {{ date }}
                {{ timestamp }}
            </span>
        </section>

        <section id="content">
            <nav>
                <i class="bx bx-menu" @click="toggleSidebar"></i>
                <a href="#" class="nav-link">Categories</a>
                <form action="#">
                    <div class="form-input">
                        <input type="search" placeholder="Search..." />
                        <button type="submit" class="search-btn">
                            <i class="bx bx-search text-black"></i>
                        </button>
                    </div>
                </form>
                <a href="#" class="notification">
                    <i class="bx bxs-bell"></i>
                    <span class="num">8</span>
                </a>
                <a href="#" class="profile">
                    <img src="people.png" />
                </a>
                <span>
                    {{ user.profileName }}
                </span>
            </nav>

            <!-- MAIN -->
            <main class="h-[780px]">
                <router-view></router-view>
            </main>
            <!-- MAIN -->
        </section>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            isSidebarHidden: false,
            activeMenuItem: "product",
            user: "",
            timestamp: "",
            date: "",
        };
    },
    async created() {
        const user = localStorage.getItem("user-info");
        const response = await axios.get(
            `users/find-by-username?username=${user}`,
            {
                headers: {
                    Authorization:
                        "Bearer " + localStorage.getItem("accessToken"),
                },
            }
        );
        this.user = response.data.data;
    },
    mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push("/auth");
        }
        setInterval(
            function () {
                this.getNow();
            }.bind(this),
            1000
        );
    },
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push("/auth");
        },
        toggleSidebar() {
            this.isSidebarHidden = !this.isSidebarHidden;
        },
        setActiveMenuItem(menuItem) {
            this.activeMenuItem = menuItem;
        },
        getNow() {
            const today = new Date();
            const date =
                today.getDate() +
                "-" +
                "0" +
                (today.getMonth() + 1) +
                "-" +
                today.getFullYear();
            const time =
                today.getHours() +
                ":" +
                today.getMinutes() +
                ":" +
                today.getSeconds();
            const dateTime = time;
            this.timestamp = dateTime;
            this.date = date;
        },
    },
};
</script>

<style scoped>
/* Ganti atau tambahkan gaya CSS sesuai kebutuhan Anda */
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,400;0,700;0,900;1,100;1,400;1,700&family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800&family=Poppins&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
a {
    text-decoration: none;
}
li {
    list-style: none;
}

html {
    overflow-x: hidden;
}
body {
    background-color: var(--grey);
    overflow-x: hidden;
}

/* SIDE BAR */
#sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 280px;
    height: 100%;
    background: var(--light);
    z-index: 2000;
    font-family: var(--lato);
    transition: 0.3s ease;
    overflow-x: hidden;
    scrollbar-width: none;
}
#sidebar::--webkit-scrollbar {
    display: none;
}
#sidebar.hide {
    width: 60px;
}

#sidebar .brand {
    font-size: 24px;
    font-weight: 700;
    height: 56px;
    display: flex;
    align-items: center;
    color: var(--gold);
    position: sticky;
    top: 0;
    left: 10;
    background: var(--light);
    z-index: 500;
    padding-bottom: 20px;
    box-sizing: content-box;
}
#sidebar .brand .bx {
    min-width: 60px;
    display: flex;
    justify-content: center;
}
#sidebar .side-menu {
    width: 100%;
    margin-top: 48px;
}
#sidebar .side-menu li {
    height: 48px;
    background: transparent;
    margin-left: 6px;
    border-radius: 48px 0 0 48px;
    padding: 4px;
}
#sidebar .side-menu li.active {
    background: var(--grey);
    position: relative;
}
#sidebar .side-menu li.active::before {
    content: "";
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    top: -40px;
    right: 0;
    box-shadow: 20px 20px 0 var(--grey);
    z-index: -1;
}
#sidebar .side-menu li.active::after {
    content: "";
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    bottom: -40px;
    right: 0;
    box-shadow: 20px -20px 0 var(--grey);
    z-index: -1;
}
#sidebar .side-menu li a {
    width: 100%;
    height: 100%;
    background: var(--light);
    display: flex;
    align-items: center;
    border-radius: 48px;
    font-size: 16px;
    color: var(--dark);
    white-space: nowrap;
    overflow-x: hidden;
}
#sidebar .side-menu li.active a {
    color: var(--gold);
}
#sidebar.hide .side-menu li a {
    width: calc(48px - (4px * 2));
    transition: width 0.3s ease;
    -webkit-transition: width 0.3s ease;
    -moz-transition: width 0.3s ease;
    -ms-transition: width 0.3s ease;
    -o-transition: width 0.3s ease;
}
#sidebar .side-menu li a.logout {
    color: var(--red);
}
#sidebar .side-menu.top li a:hover {
    color: var(--gold);
}
#sidebar .side-menu li a .bx {
    min-width: calc(60px - ((4px + 6px) * 2));
    display: flex;
    justify-content: center;
}
/* SIDE BAR */

/* CONTENT */
#content {
    position: relative;
    width: calc(100% - 280px);
    left: 280px;
    transition: 0.3s ease;
    -webkit-transition: 0.3s ease;
    -moz-transition: 0.3s ease;
    -ms-transition: 0.3s ease;
    -o-transition: 0.3s ease;
}
#sidebar.hide ~ #content {
    width: calc(100% - 60px);
    left: 60px;
}
/* NAVBAR */
#content nav {
    height: 56px;
    background: var(--light);
    padding: 0 24px;
    display: flex;
    align-items: center;
    grid-gap: 24px;
    font-family: var(--lato);
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1000;
}
#content nav::before {
    content: "";
    position: absolute;
    width: 40px;
    height: 40px;
    bottom: -40px;
    left: 0;
    border-radius: 50%;
    box-shadow: -20px -20px 0 var(--light);
}
#content nav a {
    color: var(--dark);
}
#content nav .bx.bx-menu {
    cursor: pointer;
}
#content nav .nav-link {
    font-size: 16px;
    transition: 0.3s ease;
    -webkit-transition: 0.3s ease;
    -moz-transition: 0.3s ease;
    -ms-transition: 0.3s ease;
    -o-transition: 0.3s ease;
}
#content nav .nav-link:hover {
    color: var(--gold);
}
#content nav form {
    max-width: 400px;
    width: 100%;
    margin-right: auto;
}
#content nav form .form-input {
    display: flex;
    align-items: center;
    height: 36px;
}
#content nav form .form-input input {
    flex-grow: 1;
    padding: 0 16px;
    height: 100%;
    border: none;
    background: var(--grey);
    border-radius: 36px 0 0 36px;
    -webkit-border-radius: 36px 0 0 36px;
    -moz-border-radius: 36px 0 0 36px;
    -ms-border-radius: 36px 0 0 36px;
    -o-border-radius: 36px 0 0 36px;
    outline: none;
    width: 100%;
}
#content nav form .form-input button {
    width: 36px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--gold);
    color: var(--light);
    font-size: 18px;
    border: none;
    outline: none;
    border-radius: 0 36px 36px 0;
    -webkit-border-radius: 0 36px 36px 0;
    -moz-border-radius: 0 36px 36px 0;
    -ms-border-radius: 0 36px 36px 0;
    -o-border-radius: 0 36px 36px 0;
    cursor: pointer;
}
#content nav .notification {
    font-size: 20px;
    position: relative;
}
#content nav .notification .num {
    position: absolute;
    top: -6px;
    right: -6px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    border: 2px solid var(--light);
    background: var(--red);
    color: var(--light);
    font-weight: 700;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
}
#content nav .profile img {
    width: 36px;
    height: 36px;
    object-fit: cover;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
}

/* NAVBAR */

/* MAIN */
#content main {
    width: 100%;
    padding: 36px 24px;
    font-family: var(--poppins);
    max-height: calc(100vh - 56px);
    overflow-y: auto;
    background: var(--grey);
}
#content main .head-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    grid-gap: 16px;
    flex-wrap: wrap;
}
#content main .head-title .left h1 {
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 10px;
    color: var(--dark);
}

#content main .head-title .left .breadcrumb {
    display: flex;
    align-items: center;
    grid-gap: 16px;
}
#content main .head-title .left .breadcrumb li a {
    color: var(--dark-grey);
    pointer-events: none;
}
#content main .head-title .left .breadcrumb li a.active {
    color: var(--gold);
    pointer-events: unset;
}
#content main .head-title .btn-download {
    height: 36px;
    padding: 0 16px;
    border-radius: 36px;
    -webkit-border-radius: 36px;
    -moz-border-radius: 36px;
    -ms-border-radius: 36px;
    -o-border-radius: 36px;
    background: var(--gold);
    color: var(--light);
    display: flex;
    justify-content: center;
    align-items: center;
    grid-gap: 10px;
    font-weight: 500;
}

#content main .box-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 24px;
    margin-top: 36px;
}
#content main .box-info li {
    padding: 24px;
    background: var(--light);
    border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    -ms-border-radius: 20px;
    -o-border-radius: 20px;
    -webkit-border-radius: 20px;
    display: flex;
    align-items: center;
    grid-gap: 24px;
}
#content main .box-info li .bx {
    width: 80px;
    height: 80px;
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    font-size: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
}
#content main .box-info li:nth-child(1) .bx {
    background: var(--light-gold);
    color: var(--gold);
}
#content main .box-info li:nth-child(2) .bx {
    background: var(--light-yellow);
    color: var(--yellow);
}
#content main .box-info li:nth-child(3) .bx {
    background: var(--light-orange);
    color: var(--orange);
}
#content main .box-info li .text h3 {
    font-size: 24px;
    font-weight: 600;
}
#content main .table-data {
    display: flex;
    flex-wrap: wrap;
    grid-gap: 24px;
    margin-top: 24px;
    width: 100%;
}
#content main .table-data > div {
    border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    -ms-border-radius: 20px;
    -o-border-radius: 20px;
    background: var(--light);
    padding: 24px;
    overflow-x: auto;
}
#content main .table-data .head {
    display: flex;
    align-items: center;
    grid-gap: 16px;
    margin-bottom: 24px;
}
#content main .table-data .order .head h3 {
    margin-right: auto;
    font-size: 24px;
    font-weight: 600;
}
#content main .table-data .order {
    cursor: pointer;
}
#content main .table-data .order {
    flex-grow: 1;
    flex-basis: 500px;
}
#content main .table-data .order table {
    width: 100%;
    border-collapse: collapse;
}
#content main .table-data .order table th {
    padding-bottom: 12px;
    font-size: 13px;
    text-align: left;
    border-bottom: 1px solid var(--grey);
}
#content main .table-data .order table td {
    padding: 16px 0;
}
#content main .table-data .order table tr td:first-child {
    display: flex;
    align-items: center;
    grid-gap: 12px;
    padding-left: 6px;
}

#content main .table-data .order table td img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    object-fit: cover;
}
#content main .table-data .order table tbody tr:hover {
    background: var(--grey);
}
#content main .table-data .order table tr td .status {
    font-size: 10px;
    padding: 6px 16px;
    color: var(--light);
    border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    -ms-border-radius: 20px;
    -o-border-radius: 20px;
    font-weight: 700;
}
#content main .table-data .order table tr td .status.completed {
    background: var(--gold);
}
#content main .table-data .order table tr td .status.process {
    background: var(--yellow);
}
#content main .table-data .order table tr td .status.pending {
    background: var(--orange);
}
#content main .table-data .todo {
    flex-grow: 1;
    flex-basis: 300px;
}
#content main .table-data .todo .todo-list {
    width: 100%;
}
#content main .table-data .todo .todo-list li {
    width: 100%;
    margin-bottom: 16px;
    background: var(--grey);
    border-radius: 10px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 20px;
    padding: 14px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-left: 10px solid;
}
#content main .table-data .todo .todo-list li .bx {
    cursor: pointer;
}
#content main .table-data .todo .todo-list li.completed {
    border-left: 10px solid var(--gold);
}
#content main .table-data .todo .todo-list li.not-completed {
    border-left: 10px solid var(--orange);
}
#content main .table-data .todo .todo-list li:last-child {
    margin-bottom: 0;
}

/* MAIN */
/* CONTENT */

@media screen and (max-width: 768px) {
    #sidebar {
        width: 200px;
    }
    #content {
        width: calc(100% - 60px);
        left: 200px;
    }
    #content {
        position: relative;
        width: calc(100% - 280px);
    }
    #content nav .nav-link {
        display: none;
    }
}

@media screen and (max-width: 576px) {
    #content nav form .form-input input {
        display: none;
    }
    #content nav form .form-input button {
        width: auto;
        height: auto;
        background: transparent;
        border-radius: none;
        -webkit-border-radius: none;
        -moz-border-radius: none;
        -ms-border-radius: none;
        -o-border-radius: none;
        color: var(--dark);
    }
    #content nav form.show .form-input input {
        display: block;
        width: 100%;
    }
    #content nav form.show .form-input button {
        width: 36px;
        height: 100%;
        border-radius: 0 36px 36px 0;
        -webkit-border-radius: 0 36px 36px 0;
        -moz-border-radius: 0 36px 36px 0;
        -ms-border-radius: 0 36px 36px 0;
        -o-border-radius: 0 36px 36px 0;
        color: var(--light);
        background: var(--red);
    }
    #content nav form.show ~ .notification,
    #content nav form.show ~ .profile {
        display: none;
    }
    #content main .box-info {
        grid-template-columns: 1fr;
    }
    #content main .table-data .head {
        min-height: 420px;
    }
    #content main .table-data .order table {
        min-height: 420px;
    }
    #content main .table-data .todo .todo-list {
        min-width: 420px;
    }
}
</style>
