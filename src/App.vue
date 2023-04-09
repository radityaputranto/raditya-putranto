<template>
  <div class="mt-4">
    <BlobBackground />
    <div class="content container mx-auto px-4">
      <p class="text-md">Let's get in touch 🙋‍♂️</p>
      <p class="font-semibold text-xl">
        Any project ideas? <br />
        Ask Something?
      </p>
      <img src="./assets/img/memoji.png" alt="" class="img-profile mt-4" />
      <p class="font-bold text-3xl">Raditya Putranto</p>
      <p class="text-lg mb-2">Find me on:</p>
      <SocialMediaBtn />

      <br /><br />
      <p class="text-lg mt-4 mb-2 mt-4">Other Link:</p>
      <LinkBtn />
    </div>
  </div>
</template>

<script>
import BlobBackground from "./components/BlobBackground.vue";
import SocialMediaBtn from "./components/SocialMediaBtn.vue";
import LinkBtn from "./components/LinkBtn.vue";

export default {
  name: "IndexPage",
  components: {
    BlobBackground,
    SocialMediaBtn,
    LinkBtn,
  },
  data() {
    return {};
  },
};
</script>

<style>
.img-profile {
  border-radius: 50%;
  width: 120px;
}
</style>
