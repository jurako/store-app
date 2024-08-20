<template>
  <div>
    <BaseIcon iconName="fa-bars" @click="toggleSideMenu" />
    <div class="absolute top-0 left-0 bottom-0 right-0 backdrop-blur-sm" v-show="showSideMenu" @click="toggleSideMenu">
      <div class="side-menu h-screen w-64 fixed top-0 left-0 bg-celadon-light">
        <div class="flex justify-center items-center h-14 w-14 absolute -right-16 border-2 border-rose-quartz opacity-35 rounded-full">
          <BaseIcon iconName="fa-xmark" size="2x" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BaseIcon from './BaseIcon.vue';

  export default {
    components: { BaseIcon },
    data() {
      return {
        showSideMenu: false
      }
    },
    methods: {
        toggleSideMenu(event) {
          if(!this.showSideMenu) {
            this.showSideMenu = true;
          } else if(!event.target.classList.contains('side-menu')) {
            this.showSideMenu = false;
          }
        }
    }
  }
</script>