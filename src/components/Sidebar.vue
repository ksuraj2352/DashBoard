<template>
  <v-navigation-drawer v-model="drawer" app class="visible-md-and-up">
    <div class="d-flex align-center justify-center mt-5">
      <v-img
        alt="School Logo"
        class="shrink mr-2"
        contain
        src="../assets/school.svg"
        transition="scale-transition"
        width="57"
      />
    </div>
    <nav-class-drop></nav-class-drop>
    <v-list nav dense class="mt-5">
      <v-list-item-group v-model="selectItem">
        <v-list-item
          v-for="[icon, text, link] in links"
          :key="link"
          link
          :to="link"
          color="#491ACB"
        >
          <v-list-item-icon class="ml-6">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <template v-slot:append>
      <div class="pa-2 mb-2">
        <v-btn block dark color="#491ACB"> Join Class </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
import NavClassDrop from "./nav-bar-drop/NavClassDrop.vue";

export default {
  components: { NavClassDrop },

  data() {
    return {
      drawer: null,
      selectItem: 0,
      links: [
        ["mdi-inbox-arrow-down", "Overview", "/overview"],
        ["mdi-send", "Discussions", "/discussions"],
        // ["mdi-delete", "Discussions", "/discussions"],
        ["mdi-history", "Tests", "/tests"],
        ["mdi-database", "Resources", "/resources"],
        ["mdi-alert-octagon", "Assessments", "/assessments"],
      ],
    };
  },
};
</script>

<style>
</style>