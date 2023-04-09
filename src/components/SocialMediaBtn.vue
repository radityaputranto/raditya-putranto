<template>
  <div class="grid grid-cols-2 gap-4 btn-wrapper">
    <div v-for="item in links" :key="item.id">
      <a
        :href="item.url"
        target="_blank"
        class="relative block border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100"
        ><font-awesome-icon class="mr-2" :icon="['fab', item.icon]" />{{
          item.name
        }}</a
      >
    </div>
  </div>
</template>


<script>
export default {
  name: "SocialMediaBtn",
  props: {
    msg: String,
  },
  data() {
    return {
      links: [
        {
          icon: "linkedin",
          name: "Linkedin",
          url: "https://www.linkedin.com/in/radityaputranto/",
        },
        {
          icon: "github",
          name: "Github",
          url: "https://github.com/radityaputranto",
        },
        {
          icon: "instagram",
          name: "Instagram",
          url: "http://http://instagram.com/raditya_putranto",
        },
        {
          icon: "twitter",
          name: "Twitter",
          url: "https://twitter.com/radityaputranto",
        },
        {
          icon: "medium",
          name: "Medium",
          url: "https://medium.com/@radityaputranto",
        },
        {
          icon: "unsplash",
          name: "Unsplash",
          url: "https://unsplash.com/@raditya_putranto",
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

<style >
.btn {
  @apply py-2 px-4 font-semibold rounded-lg shadow-md;
}
.btn-green {
  @apply text-white bg-green-500 hover:bg-green-700;
}
.btn-wrapper {
  z-index: 99;
}
</style>