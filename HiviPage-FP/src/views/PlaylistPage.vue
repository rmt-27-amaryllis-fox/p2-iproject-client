<script></script>
<template>
  <!-- tes display spotify -->
  <section>
    <h1>Discography</h1>
    <div class="grid-container">
      <iframe
        class="playlists"
        style="border-radius: 12px"
        src="https://open.spotify.com/embed/album/3GXsFGyViN6r1JYvuHYYSG?utm_source=generator"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>

      <iframe
        class="playlists"
        style="border-radius: 12px"
        src="https://open.spotify.com/embed/album/4X40KZmA4LE4beNaNrQuNw?utm_source=generator"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>

      <iframe
        class="playlists"
        style="border-radius: 12px"
        src="https://open.spotify.com/embed/album/1omMrtVETWau6zIf3ff4ae?utm_source=generator"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <iframe
        class="playlists"
        style="border-radius: 12px"
        src="https://open.spotify.com/embed/album/47CBITCbtM5gv9UfHf1azO?utm_source=generator"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>

      <iframe
        class="playlists"
        style="border-radius: 12px"
        src="https://open.spotify.com/embed/album/3t922wa0L1w1IxEJwVoLcM?utm_source=generator"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  </section>
</template>
<style scoped>
h1 {
  font-size: 110px;
  display: flex;
  justify-content: center;
}
.grid-container {
  justify-content: center;
  margin-top: 50px;
  margin-left: 50px;
  margin-right: 50px;
  display: grid;
  grid-template-columns: auto auto auto;
  row-gap: 30px;
  column-gap: 150px;
  /* width: 10vw; */
}
.playlists {
  display: flex;
  width: 300px;
  height: 400px;
}
</style>
