<template>
  <v-card class="mx-10 mt-4 mb-4" :width="imageWidth" flat dense>
    <v-list two-line color="#F8F8FA">
      <v-list-item-group>
        <template>
          <v-list-item :ripple="false" class="removeEffect">
            <v-list-item-avatar>
              <v-img :src="image"></v-img>
            </v-list-item-avatar>
            <template>
              <v-list-item-content>
                <v-list-item-title>{{ name }}</v-list-item-title>
                <v-list-item-subtitle class="text-wrap">{{
                  message
                }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action-text
                class="ml-4 font-weight-medium subColor--text"
              >
                1 hr ago
              </v-list-item-action-text>
            </template>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: ["message", "name", "image", "imageWidth"],
};
</script>

<style scoped>
.v-card {
  color: grey !important;
}

.removeEffect::before {
  background: none;
}

.fontResize {
  font-size: 30px;
}
</style>