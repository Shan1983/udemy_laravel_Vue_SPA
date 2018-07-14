<template>
  <v-form @submit.prevent="signup">
      <v-container>
        <v-text-field
        v-model="form.name"
        label="Name"
        type="text"
        required
        autocomplete="nope"
        ></v-text-field>
        <span class="red--text" v-if="errors.name">{{errors.name[0]}}</span>

        <v-text-field
        v-model="form.email"
        label="E-mail"
        type="email"
        required
        autocomplete="nope"
        ></v-text-field>
        <span class="red--text" v-if="errors.email">{{errors.email[0]}}</span>


        <v-text-field
        v-model="form.password"
        label="Password"
        type="password"
        required
        autocomplete="nope"
        ></v-text-field>
        <span class="red--text" v-if="errors.password">{{errors.password[0]}}</span>

        <v-text-field
        v-model="form.password_confirmation"
        label="Confirm Password"
        type="password"
        required
        autocomplete="nope"
        ></v-text-field>

        <v-btn color="green" type="submit">Sign up</v-btn>

        <router-link to="/login">
                <v-btn color="blue">Back to login</v-btn>
        </router-link>
      </v-container>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null
      },
      errors: {}
    };
  },
  created() {
    if (User.loggedIn()) {
      this.$router.push({ name: "forum" });
    }
  },
  methods: {
    signup() {
      axios
        .post("/api/auth/signup", this.form)
        .then(res => {
          User.responseAfterLogin(res);
          this.$router.push({ name: "forum" });
        })
        .catch(err => (this.errors = err.response.data.errors));
    }
  }
};
</script>

<style>
</style>
