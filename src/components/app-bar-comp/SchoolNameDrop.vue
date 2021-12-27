<template>
  <div>
    <v-menu offset-y transition="scroll-x-transition">
      <template v-slot:activator="{ on, attrs }">
        <span v-bind="attrs" v-on="on" class="font-weight-medium black--text" :class="$vuetify.breakpoint.smAndDown ? 'fontResize' : null  "
          >Army Public School, Mathura</span
        >
        <v-icon v-bind="attrs" v-on="on" color="grey">mdi-chevron-down</v-icon>
      </template>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { title: "Kendriya Vidyalaya, Alipur" },
      { title: "Delhi Public School, Delhi" },
      { title: "Little Flower School, Tripura"    },
      { title: "Sunflower School, Agra" },
    ],
  }),
};
</script>


<style scoped>

.fontResize {
  font-size: 14px;
}

</style>
