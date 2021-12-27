<template>
  <v-card class="mt-n4">
    <v-app-bar flat color="rgba(0,0,0,0)">
      <v-toolbar-title class="title pl-4 font-weight-bold text-wrap"
        >How can glass be a liquid if it's so hard?</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <v-btn outlined dark color="#BDBDBD" class="mr-7">
          <v-icon color="#000">mdi-dots-horizontal</v-icon>
        </v-btn>
      </v-toolbar-title>
    </v-app-bar>
    <h4 class="font-weight-medium pl-8 subColor--text mt-3">
      Let me know if you have any doubts in the lectures I teach. I’ll try to
      answer all of them here.
    </h4>

    <v-tabs class="pl-8">
      <v-tab @click="comments = true">Comments</v-tab>
      <v-tab>Attachments</v-tab>
    </v-tabs>
    <v-divider></v-divider>

    <div>
      <comment-card
        v-if="comments"
        name="Adison Passaquindici"
        image="https://images.all-free-download.com/images/graphicwebp/attractive_woman_avatar_template_cartoon_character_sketch_6849756.webp"
        message=".Hi Sir, I have a doubt in today’s class."
        imageWidth="400"
      ></comment-card>
      <comment-card
        v-if="comments"
        name="Desirae Westervelt"
        imageWidth="700"
        image="https://images.all-free-download.com/images/graphicwebp/girl_avatar_template_handdrawn_cartoon_character_sketch_6849754.webp"
        message="I feel this so incredibly hard. I used to be a digital artist and I pushed too hard and destroyed my arm. 'Just a little bit more' is the worst decision ever."
      ></comment-card>
      <editable-card v-if="comments"></editable-card>
      <comment-card
        v-if="comments"
        name="Jaydon Calzoni"
        imageWidth="550"
        image="https://images.all-free-download.com/images/graphicwebp/lady_portrait_avatar_template_attractive_woman_sketch_6849755.webp"
        message="LOL It’s funny cuz it’s true. Also, it’ll sabotage your work too."
      ></comment-card>
    </div>

    <v-textarea
      v-if="comments"
      class="mx-10"
      name="input-2-1"
      filled
      auto-grow
      value="Write Something..."
      height="70"
      fixed
    ></v-textarea>
  </v-card>
</template>

<script>
import CommentCard from "./comments-card/CommentCard.vue";
import EditableCard from "./editable-card/EditableCard.vue";

export default {
  components: {
    CommentCard,
    EditableCard,
  },

  data() {
    return {
      comments: true,
      tab: null,
      allComments: {
        name: "Adison Passaquindici",
        image: "https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",
        message:
          "I feel this so incredibly hard. I used to be a digital artist and I pushed too hard and destroyed my arm. 'Just a little bit more' is the worst decision ever.",
      },
    };
  },
};
</script>

