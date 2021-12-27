<template>
  <v-app>
    <v-app-bar app color="#fff" dark>
      <div class="d-flex align-center">
        <v-img
          alt="School Logo"
          class="shrink mr-2"
          contain
          src="https://www.apsjorhat.org/assets/img/aps_jorhat_og.png"
          transition="scale-transition"
          width="37"
        />
        <school-name-drop></school-name-drop>
      </div>
      <v-spacer></v-spacer>
      <div>
        <profile-drop-down class="hidden-md-and-down"></profile-drop-down>
      </div>
    </v-app-bar>

    <sidebar></sidebar>

    <v-main >
      <router-view />
    </v-main>

    <bottom-navigation></bottom-navigation>
  </v-app>
</template>

<script>
import ProfileDropDown from "./components/app-bar-comp/ProfileDropDown.vue";
import SchoolNameDrop from "./components/app-bar-comp/SchoolNameDrop.vue";
import BottomNavigation from "./components/BottomNavigation.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  components: {
    Sidebar,
    BottomNavigation,
    ProfileDropDown,
    SchoolNameDrop,
  },
  name: "App",
};
</script>


<style scoped>
.styleMain {
  padding: 56px 10px 3px 10px;
}
</style>




