<template>
  <div>
    <v-card class="mx-8 mt-6 mb-10">
      <v-list height="75">
        <v-list-item-group>
          <template>
            <v-list-item>
              <v-list-item-avatar>
                <v-img
                  src="https://images.unsplash.com/photo-1580763052606-bb450b3c2cb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                ></v-img>
              </v-list-item-avatar>
              <template>
                <v-list-item-content>
                  <v-list-item-title>11th A</v-list-item-title>
                  <v-list-item-subtitle class="text-wrap"
                    >Science</v-list-item-subtitle
                  >
                </v-list-item-content>
                <v-list-item-action-text
                  class="ml-4 font-weight-medium subColor--text"
                >
                  <v-icon color="grey">mdi-chevron-down</v-icon>
                </v-list-item-action-text>
              </template>
            </v-list-item>
          </template>
        </v-list-item-group>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: "Account",
        },
        {
          name: "Profile",
        },
        {
          name: "Logout",
        },
      ],
    };
  },
};
</script>
