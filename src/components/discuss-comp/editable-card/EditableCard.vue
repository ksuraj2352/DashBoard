<template>
  <div>
    <v-card class="mx-10 mt-4 mb-4" dense elevation="4">
      <v-list two-line>
        <v-list-item-group>
          <template>
            <v-list-item :ripple="false" class="removeEffect">
              <v-list-item-avatar>
                <v-img
                  src="https://images.all-free-download.com/images/graphicwebp/young_woman_portrait_avatar_template_cartoon_character_sketch_6849752.webp"
                ></v-img>
              </v-list-item-avatar>
              <template>
                <v-list-item-content>
                  <v-list-item-title>Adison Passaquindici</v-list-item-title>
                  <v-list-item-subtitle class="text-wrap">
                    <div >
                      <div
                        :class="editing ? 'font-weight-black' : null"
                        contenteditable
                        v-text="value"
                        v-show="editing"
                      ></div>
                      <span
                        v-html="value"
                        class="font-weight-black"
                        v-if="!editing"
                      ></span>
                    </div>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-list-item>
          </template>
        </v-list-item-group>
      </v-list>
    </v-card>
    <div>
      <v-row justify="end">
        <v-col md="2">
          <v-btn outlined class="px-6">Cancel</v-btn>
        </v-col>
        <v-col cols="auto" class="mr-10">
          <v-btn color="indigo white--text" depressed>Save Changes</v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>




<script>
export default {
  data() {
    return {
      editing: true,
      value: "I see a lot of people don't get it",
    };
  },
};
</script>

<style scoped>
[contenteditable]:focus {
  outline: 4px solid #ddd;
}

.editable {
  font-size: 16px;
}

.removeEffect::before {
  background: none;
}
</style>