<template>
  <div>
    <small>Let's get in touch</small>
    <h1>Raditya Putranto</h1>
    <h6>Contact me via:</h6>
    <div class="grid grid-cols-2 gap-4">
      <div v-for="item in links" :key="item.id">
        <a
          :href="item.url"
          target="_blank"
          class="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700"
          ><font-awesome-icon class="mr-2" :icon="['fab', item.icon]" />{{
            item.name
          }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      links: [
        {
          icon: "linkedin",
          name: "Linkedin",
          url: "https://www.linkedin.com/in/radityaputranto/",
        },
        {
          icon: "instagram",
          name: "Instagram",
          url: "http://http://instagram.com/raditya_putranto",
        },
        {
          icon: "twitter",
          name: "twitter",
          url: "https://twitter.com/radityaputranto",
        },
        {
          icon: "medium",
          name: "Medium",
          url: "https://medium.com/@radityaputranto",
        },
        {
          icon: "spotify",
          name: "Spotify",
          url: "https://open.spotify.com/user/21ercmyaahviavsid45c74oai?si=sLeETtgCS1GNa3D4V-_Osg&nd=1",
        },
        {
          icon: "soundcloud",
          name: "Soundcloud",
          url: "https://soundcloud.com/raditya_putranto",
        },
      ],
    };
  },
};
</script>

<style>
.btn {
  @apply py-2 px-4 font-semibold rounded-lg shadow-md;
}
.btn-green {
  @apply text-white bg-green-500 hover:bg-green-700;
}
</style>
