<script>
export default {
  name: "NavBar",
};
</script>
<template>
  <section class="navbar">
    <header class="text-gray-600 body-font">
      <div
        class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
      >
        <img class="LogoMusik" src="../assets/music-svgrepo-com.svg" alt="" />
        <a
          class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <!-- coba svg -->

          <!-- coba svg -->
          <!-- <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-red-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
            ></path>
          </svg> -->
          <span class="ml-3 text-xl">Hivi-Club</span>
        </a>
        <nav
          class="navbar-link md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center"
        >
          <router-link class="mr-5 hover:text-gray-900" to="/"
            >Home</router-link
          >
          <router-link class="mr-5 hover:text-gray-900" to="/playlists"
            >Playlists</router-link
          >
          <router-link class="mr-5 hover:text-gray-900" to="/gigs"
            >Upcoming gigs</router-link
          >
          <router-link class="mr-5 hover:text-gray-900" to="/messages"
            >Greet us!</router-link
          >
          <!-- <router-link class="mr-5 hover:text-gray-900" to="/gigs"
            >Merchandise</router-link
          > -->
          <!-- <a class="mr-5 hover:text-gray-900">Home</a>
          <a class="mr-5 hover:text-gray-900">Playlists</a> -->
          <!-- <a class="mr-5 hover:text-gray-900">Upcoming gigs</a> -->
          <!-- <a class="mr-5 hover:text-gray-900">Merchandise</a> -->
          <div class="socmed">
            <span
              class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"
            >
              <a
                class="text-gray-500"
                href="https://www.facebook.com/sayhivi"
                target="_blank"
              >
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                  ></path>
                </svg>
              </a>
              <a
                class="ml-3 text-gray-500"
                href="https://twitter.com/sayHIVI"
                target="_blank"
              >
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                  ></path>
                </svg>
              </a>
              <a
                class="ml-3 text-gray-500"
                href="https://www.instagram.com/sayhivi/"
                target="_blank"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path
                    d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                  ></path>
                </svg>
              </a>
            </span>
          </div>
        </nav>
      </div>
    </header>
  </section>
</template>
<style scoped>
.navbar-link {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.navbar {
  background-color: darkorange;
  font-weight: 400;

  top: 0;
}

a {
  cursor: pointer;

  font-size: 20px;
  color: rgb(96, 237, 245);
}

.LogoMusik {
  width: 40px;
}
.socmed {
  margin-left: 30vw;
  display: flex;
  justify-content: space-between;
}
/* header {
  position: fixed;
  top: 0;
} */
</style>
