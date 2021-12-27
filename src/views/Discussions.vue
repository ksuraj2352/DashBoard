<template>
  <v-card color="#F8F8FA" :class="$vuetify.breakpoint.mdAndUp ? 'deskMain':'mobileMain'">
    <v-row justify="space-between">
      <v-col md="4" cols="12" class="pt-10 pl-10">
        <h2>Discussions</h2>
      </v-col>

      <v-col cols="auto" class="pt-9 mr-2 hidden-md-and-down ml-auto">
        <v-btn class="ma-2" outlined color="indigo">
          <v-icon class="pr-2">mdi-plus</v-icon>
          Create New Discussions
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col lg="4" sm="12" cols="12">
        <discuss-comp class="mx-6"></discuss-comp>
      </v-col>
      <v-col lg="8" sm="12" cols="12" class="hidden-md-and-down">
        <comment-comp class="mr-4"></comment-comp>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import CommentComp from "../components/discuss-comp/CommentComp.vue";
import DiscussComp from "../components/discuss-comp/DiscussComp.vue";

export default {
  components: {
    DiscussComp,
    CommentComp,
  },
};
</script>

<style scoped>
.deskMain {
  padding: 15px 10px 3px 10px;
}

.mobileMain {
  padding: 0 10px 3px 0;
}
</style>

