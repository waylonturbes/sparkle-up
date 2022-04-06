<template>
  <v-card outlined elevation="3" v-cloak>
    <v-row>
      <v-col>
        <v-avatar size="100">
          <img :src="creator.avatar" alt="Waylon Turbes" />
        </v-avatar>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      creator: {
        avatar: "",
        name: "",
        bio: "",
        github_handle: "",
        github_url: "",
      },
      error: "",
    };
  },
  methods: {
    async getUserAccount() {
      try {
        const res = await axios.get(
          "https://api.github.com/users/waylonturbes"
        );
        this.creator.avatar = res.data.avatar_url;
        this.creator.name = res.data.name;
        this.creator.bio = res.data.bio;
        this.creator.github_handle = res.data.login;
        this.creator.github_url = res.data.html_url;
        return;
      } catch (err) {
        this.error = err;
        return;
      }
    },
  },
  beforeMount: function () {
    this.getUserAccount();
  },
};
</script>
