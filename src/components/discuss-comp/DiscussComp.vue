<template>
  <v-card class="rounded-l mb-8">
    <v-list two-line class="mt-n4">
      <v-list-item-group>
        <template v-for="(item, index) in listItems">
          <v-list-item :key="item.questions">
            <v-list-item-avatar>
              <img :src="item.avatar" rounded alt="" />
            </v-list-item-avatar>
            <template>
              <v-list-item-content>
                <v-list-item-subtitle
                  class="font-weight-regular subColor--text"
                  >{{ item.name }}</v-list-item-subtitle
                >
                <v-list-item-title
                  class="text-wrap  "
                  :class="[(item.active ? 'questColor--text ' : 'black--text') , ($vuetify.breakpoint.smAndDown ? 'font-weight-bold fontResize' : null) ]  "
                  >{{ item.question }}</v-list-item-title
                >
                <v-list-item-subtitle
                  class="subColor--text font-weight-regular"
                  >{{ item.comments }}</v-list-item-subtitle
                >
              </v-list-item-content>
              <v-list-item-action-text
                class="ml-4 font-weight-regular subColor--text"
                >{{ item.time }}</v-list-item-action-text
              >
            </template>
          </v-list-item>
          <v-divider
            v-if="index < listItems.length - 1"
            :key="index"
            class="mx-5"
          ></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    listItems: [
      {
        avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
        name: "Suraj Prasad",
        question: "How can glass be a liquid if it's so hard?",
        time: "2 Days Ago",
        comments: "3 comments",
        active: true,
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
        name: "Suraj Prasad",
        question: "Can you light diamond on fire?",
        time: "2 Days Ago",
        comments: "13 comments",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
        name: "Suraj Prasad",
        question:
          "What is it about the ocean that makes it look blue when it reflects the sky?",
        time: "2 Days Ago",
        comments: "34 comments",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
        name: "Suraj Prasad",
        question:
          "What is the difference between a chemical process and a physical process in...",
        time: "2 Days Ago",
        comments: "7 comments",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
        name: "Suraj Prasad",
        question: "What made the hole in the ozone go away?",
        time: "2 Days Ago",
        comments: "10 comments",
      },
      {
        avatar: "https://cdn.vuetifyjs.com/images/john.jpg",
        name: "Suraj Prasad",
        question:
          "When hang-drying clothes, which is faster, indoors or outdoors?",
        time: "2 Days Ago",
        comments: "20 comments",
      },
    ],
  }),


};
</script>

<style scoped>


.fontResize {
    font-size: 13px;
}



</style>

