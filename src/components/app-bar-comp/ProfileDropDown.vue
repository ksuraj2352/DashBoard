<template>
  <div>
    <v-menu offset-y transition="scroll-x-transition" >
      <template v-slot:activator="{ on, attrs }">
        <v-avatar color="blue" size="42" v-bind="attrs" v-on="on">
          <span class="white--text text-h5">S</span>
        </v-avatar>
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
      { title: "Profile" },
      { title: "Settings" },
      { title: "Subscription" },
      { title: "Logout" },
    ],
  }),
};
</script>

<style>
</style>