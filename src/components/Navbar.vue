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
                    <a href="#" @click="setActiveMenuItem('dashboard')">
                        <i class="bx bxs-dashboard"></i>
                        <span class="text">Dashboard</span>
                    </a>
                </li>
                <li :class="{ active: activeMenuItem === 'store' }">
                    <a href="#" @click="setActiveMenuItem('store')">
                        <i class="bx bxs-shopping-bag-alt"></i>
                        <span class="text">My Store</span>
                    </a>
                </li>
                <li :class="{ active: activeMenuItem === 'analytics' }">
                    <a href="#" @click="setActiveMenuItem('analytics')">
                        <i class="bx bxs-doughnut-chart"></i>
                        <span class="text">Analytics</span>
                    </a>
                </li>
                <li :class="{ active: activeMenuItem === 'message' }">
                    <a href="#" @click="setActiveMenuItem('message')">
                        <i class="bx bxs-message-dots"></i>
                        <span class="text">Message</span>
                    </a>
                </li>
                <li :class="{ active: activeMenuItem === 'team' }">
                    <a href="#" @click="setActiveMenuItem('team')">
                        <i class="bx bxs-group"></i>
                        <span class="text">Team</span>
                    </a>
                </li>
            </ul>
            <ul class="side-menu">
                <li>
                    <a href="#">
                        <i class="bx bxs-cog"></i>
                        <span class="text">Settings</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="logout" @click="logout">
                        <i class="bx bxs-log-out-circle"></i>
                        <span class="text">Logout</span>
                    </a>
                </li>
            </ul>
        </section>
     
      
     
  
</template>

<script>
export default {
  data() {
      return {
          isSidebarHidden: false,
          activeMenuItem: "dashboard",
      };
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
  width: 200px;
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
  width: calc(100% - 200px);
  left: 200px;
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

</style>
