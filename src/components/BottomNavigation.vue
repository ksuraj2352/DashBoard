<template>
  <v-container>
    <v-bottom-navigation
      :value="value"
      color="#491ACB"
      fixed
      class="hidden-lg-and-up"
      app
    >
      <v-btn
        height="56px"
        v-for="[icon, text, link] in links"
        :key="link"
        :to="link">
        <span class="font-weight-regular fontResize">{{ text }}</span>
        <v-icon>{{ icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-container>

</template>

<script>
export default {
  data() {
    return {
      value: 0,

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

<style scoped>
/* .v-bottom-navigation {
  justify-content: start;
  overflow-x: scroll;
} */

.fontResize {
  font-size: 10px;
}
</style>