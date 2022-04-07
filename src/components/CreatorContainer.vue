<template>
  <fragment>
    <v-row v-if="!error" justify="center">
      <v-spacer
        v-if="
          $vuetify.breakpoint.md ||
          $vuetify.breakpoint.lg ||
          $vuetify.breakpoint.xl
        "
      ></v-spacer>
      <v-col class="align-self-center" cols="10" md="3">
        <v-avatar size="128" class="border-1 align-self-center mb-1">
          <img :src="creator.avatar" alt="Waylon Turbes" />
        </v-avatar>
        <h6 class="text-h6 d-block">{{ creator.name }}</h6>
        <a href="github_url" style="color: inherit; text-decoration: none"
          ><span class="d-block text-white mb-2"
            ><v-icon
              :color="$vuetify.theme.dark ? 'white' : 'rgba(0, 0, 0, 0.87)'"
              class="mr-1"
              >{{ githubIcon }}</v-icon
            >{{ creator.github_handle }}</span
          ></a
        >
        <p class="text-subtitle1 mb-0">{{ creator.bio }}</p>
      </v-col>
      <v-spacer
        v-if="
          $vuetify.breakpoint.md ||
          $vuetify.breakpoint.lg ||
          $vuetify.breakpoint.xl
        "
      ></v-spacer>
      <v-col cols="10" md="7" align-self="center">
        <h4 class="text-h4 mb-5">&#128075; Hello there! My name is Waylon</h4>
        <p class="text-justify">
          I am a Full Stack Web Developer fond of both front and back-end
          development. My favorite JavaScript frameworks are Vue and React.
        </p>
        <p class="text-justify">
          Currently, I am familiar with HTML5, JavaScript, CSS3, React.js,
          Redux, and I regularly use Git, GitHub, Slack, and Zoom in an Agile
          work environment. I also have experience configuring databases using
          either PostgreSQL or SQLite3, and creating RESTful APIs for them using
          Node.js, Knex.js, and Express.js.
        </p>
        <p class="text-justify">
          I have a high level of patience, a competitive mindset, and an
          open-mind towards constructive feedback identifying and leveraging
          opportunities for learning as much as possible.
        </p>
      </v-col>
      <v-spacer
        v-if="
          $vuetify.breakpoint.md ||
          $vuetify.breakpoint.lg ||
          $vuetify.breakpoint.xl
        "
      ></v-spacer>
    </v-row>
    <v-row justify="center" v-else>
      <v-col align-self="center" cols="10">
        <p class="text-h6 text-center ma-5">{{ error }} &#128542;</p>
      </v-col>
    </v-row>
  </fragment>
</template>

<script>
import axios from "axios";
import { Fragment } from "vue-fragment";

export default {
  components: {
    Fragment,
  },
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
      githubIcon: "mdi-github",
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
        this.error = "Could not retrieve creators data";
        return;
      }
    },
  },
  beforeMount: function () {
    this.getUserAccount();
  },
};
</script>
