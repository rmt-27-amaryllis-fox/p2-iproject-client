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
          class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center"
        >
          <a class="mr-5 hover:text-gray-900">Home</a>
          <a class="mr-5 hover:text-gray-900">Playlist</a>
          <a class="mr-5 hover:text-gray-900">Upcoming gigs</a>
          <a class="mr-5 hover:text-gray-900">Merchandise</a>
        </nav>
      </div>
    </header>
  </section>
</template>
<style scoped>
.navbar {
  background-color: darkorange;
  font-weight: 400;
}
a {
  cursor: pointer;
  font-weight: 600;
  font-size: larger;
  color: bisque;
}
.LogoMusik {
  width: 40px;
}
</style>
