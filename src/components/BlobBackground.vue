<template>
  <div>
    <div
      id="shape-1"
      class="rounded-circle position-absolute opacity-70 scale-up-center d-none d-md-block"
    ></div>
    <div
      id="shape-2"
      class="rounded-circle position-absolute opacity-70 scale-up-center fade-delay-2000 d-none d-md-block"
    ></div>
    <div
      id="shape-3"
      class="rounded-circle position-absolute opacity-70 scale-up-center fade-delay-4000 d-none d-md-block"
    ></div>
  </div>
</template>

<script>
export default {
  name: "BlobBackground",
  props: {
    msg: String,
  },
};
</script>

<style>
.rounded-circle {
  border-radius: 50% !important;
}
.position-absolute {
  position: absolute !important;
}
.content {
  z-index: 99;
}
#shape-1,
#shape-2,
#shape-3 {
  min-width: 400px;
  height: 400px;
  mix-blend-mode: multiply;
  filter: blur(24px);
  z-index: 0;
}

#shape-1 {
  background-color: hsl(256, 90%, 81%);
  left: 30%;
  top: 250px;
}
#shape-2 {
  background-color: hsl(330, 94%, 87%);
  top: 150px;
  left: 60%;
}
#shape-3 {
  background-color: hsl(54, 100%, 89%);
  left: 40%;
  top: 0px;
}

.scale-up-center {
  animation: scale-up-center 7s cubic-bezier(0.39, 0.575, 0.565, 1) infinite
    both;
}
@keyframes scale-up-center {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}
.fade-delay-2000 {
  animation-delay: 2s;
}
.fade-delay-4000 {
  animation-delay: 4s;
}
.featured-image {
  z-index: 99;
  width: 70%;
  margin: 0 auto;
}
</style>