<template>
  <div class="mt-4">
    <p class="text-2xl inline-block"><VueWriter :array="arr" /> 🙋‍♂️</p>
    <!-- <Typed :options="options">
      <h1 class="typing"></h1>
    </Typed> -->
  </div>
</template>


<script>
/* import { Typed } from "@duskmoon/vue3-typed-js";
import { TypedOptions } from "@duskmoon/vue3-typed-js"; */

export default {
  name: "GreetingTyped",
  props: {},
  data() {
    return {
      arr: ["Hello!", "Bonjour", "Guten tag", "こんにちは", "مرحبًا", "你好"],
    };
  },
};

/* const TypedOptions = {
  strings: ["Hello", "World", "This is vue3-typed-js"],
  loop: true,
  typeSpeed: 30,
}; */
</script>

<style >
.is-typed {
  display: contents !important;
}
</style>