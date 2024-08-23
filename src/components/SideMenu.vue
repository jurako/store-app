<template>
  <div>
    <Transition name="fade" v-show="isVisible">
      <div
        class="fixed top-0 left-0 bottom-0 right-0 backdrop-blur-sm transition-display"
        v-show="isVisible"
        @click="$emit('toggle')"
      ></div>
    </Transition>
    <Transition name="slide">
      <div
        class="side-menu h-screen p-4 w-64 absolute top-0 left-0 bg-celadon-light"
        v-show="isVisible"
        @click="emitToggleCheckTarget"
      >
        <Transition name="fade">
          <div
            class="flex justify-center items-center h-14 w-14 absolute top-2 -right-16 border-2 border-rose-quartz rounded-full hover:bg-rose-quartz hover:cursor-pointer"
            v-show="isVisible"
          >
            <BaseIcon iconName="fa-xmark" size="2x" />
          </div>
        </Transition>
        <RouterLink class="inline-block" to="/">
          <svg
            id="logo-85"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="ccustom"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10 0C15.5228 0 20 4.47715 20 10V0H30C35.5228 0 40 4.47715 40 10C40 15.5228 35.5228 20 30 20C35.5228 20 40 24.4772 40 30C40 32.7423 38.8961 35.2268 37.1085 37.0334L37.0711 37.0711L37.0379 37.1041C35.2309 38.8943 32.7446 40 30 40C27.2741 40 24.8029 38.9093 22.999 37.1405C22.9756 37.1175 22.9522 37.0943 22.9289 37.0711C22.907 37.0492 22.8852 37.0272 22.8635 37.0051C21.0924 35.2009 20 32.728 20 30C20 35.5228 15.5228 40 10 40C4.47715 40 0 35.5228 0 30V20H10C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM18 10C18 14.4183 14.4183 18 10 18V2C14.4183 2 18 5.58172 18 10ZM38 30C38 25.5817 34.4183 22 30 22C25.5817 22 22 25.5817 22 30H38ZM2 22V30C2 34.4183 5.58172 38 10 38C14.4183 38 18 34.4183 18 30V22H2ZM22 18V2L30 2C34.4183 2 38 5.58172 38 10C38 14.4183 34.4183 18 30 18H22Z"
              fill="#627264"
            ></path>
          </svg>
        </RouterLink>
        <nav class="flex flex-col mt-2 gap-y-2 uppercase text-center hover:cursor-pointer">
          <RouterLink
            class="hover:bg-rose-quartz"
            v-for="category in categories"
            :key="category"
            :to="'/categories/' + category"
          >
            {{ category }}
          </RouterLink>
        </nav>
      </div>
    </Transition>
  </div>
</template>

<script>
import BaseIcon from './BaseIcon.vue'

export default {
  components: { BaseIcon },
  props: ['isVisible', 'categories'],
  methods: {
    emitToggleCheckTarget(event) {
      if (!event.target.classList.contains('side-menu')) {
        this.$emit('toggle')
      }
    }
  }
}
</script>

<style scoped>
.slide-leave-to,
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-leave-from,
.slide-enter-to {
  transform: translateX(0%);
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}

.fade-leave-to,
.fade-enter-from {
  opacity: 0;
}
.fade-leave-from,
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>
