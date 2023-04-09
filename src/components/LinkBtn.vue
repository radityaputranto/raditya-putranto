<template>
  <div class="grid grid-cols-1 gap-4">
    <div v-for="item in links" :key="item.id">
      <a
        :href="item.url"
        target="_blank"
        class="relative block border-2 border-gray-800 bg-transparent py-2.5 px-5 font-medium text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100"
        >{{ item.name }}</a
      >
    </div>
  </div>
</template>


<script>
export default {
  name: "LinkBtn",
  props: {
    msg: String,
  },
  data() {
    return {
      links: [
        {
          name: "CV / Curriculum Vitae",
          url: "https://drive.google.com/file/d/1TDHNGakzSabEnJYdLIDhwrYQhN81rGB6/view?usp=sharing",
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
</style>