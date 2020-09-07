<template>
  <v-container>
    <v-layout row v-if="error">
      <v-flex xs12 sm6 offset-sm3>
        <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card class="elevation-1">
          <v-card-title>Sign In</v-card-title>
          <p class="px-5">Demo: med@gmail.com:123456</p>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onSignin">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                            name="email"
                            label="Email"
                            id="email"
                            v-model="email"
                            type="email"
                            prepend-inner-icon="mdi-email-outline"
                            required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                            name="password"
                            label="Password"
                            id="password"
                            v-model="password"
                            type="password"
                            prepend-inner-icon="mdi-key"
                            required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <div class="text-xs-center">
                      <v-btn rounded outlined color="primary" type="submit" :disabled="loading" :loading="loading">
                        Sign in
                        <v-icon right>mdi-lock-open</v-icon>
                        <span slot="loader" class="custom-loader">
                        <v-icon light>cached</v-icon>
                       </span>
                      </v-btn>
                    </div>

                   <!-- &lt;!&ndash; Signin Using Third Party&ndash;&gt;
                    <div class="text-xs-center">
                      <v-btn rounded color="red" dark :disabled="loading" :loading="loading" @click.prevent="onSigninGoogle">Login with Google
                        <v-icon right dark>mdi-lock-open</v-icon>
                        <span slot="loader" class="custom-loader">
                        <v-icon light>cached</v-icon>
                       </span>
                      </v-btn>
                    </div>
                    <div class="text-xs-center">
                      <v-btn rounded color="primary" dark :disabled="loading" :loading="loading" @click.prevent="onSigninFacebook">Login with Facebook
                        <v-icon right dark>mdi-lock-open</v-icon>
                        <span slot="loader" class="custom-loader">
                        <v-icon light>cached</v-icon>
                       </span>
                      </v-btn>
                    </div>
                    <div class="text-xs-center">
                      <v-btn rounded dark :disabled="loading" :loading="loading" @click.prevent="onSigninGithub">Login with Github
                        <v-icon right dark>mdi-lock-open</v-icon>
                        <span slot="loader" class="custom-loader">
                        <v-icon light>cached</v-icon>
                       </span>
                      </v-btn>
                    </div>
                    <div class="text-xs-center">
                      <v-btn rounded color="info" dark :disabled="loading" :loading="loading" @click.prevent="onSigninTwitter">Login with Twitter
                        <v-icon right dark>mdi-lock-open</v-icon>
                        <span slot="loader" class="custom-loader">
                        <v-icon light>cached</v-icon>
                       </span>
                      </v-btn>
                    </div>-->
                    <br />

                    <!--  Reset Password -->
                    <div class="text-xs-center">
                      <v-btn rounded outlined color="warning" dark :disabled="loading" :loading="loading" @click.prevent="onResetPassword">Reset Password By Email
                        <v-icon right dark>mdi-email</v-icon>
                        <span slot="loader" class="custom-loader">
                        <v-icon light>mdi-cached</v-icon>
                       </span>
                      </v-btn>
                    </div>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    computed: {
      user () {
        return this.$store.getters['auth/user']
      },
      error () {
        return this.$store.getters['shared/error']
      },
      loading () {
        return this.$store.getters['shared/loading']
      }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/profile')
        }
      }
    },
    methods: {
      onSignin () { //this.$store.dispatch("books/updateItem")(this.item);
        this.$store.dispatch('auth/signUserIn',{email: this.email, password: this.password});
      },
     /* onSigninGoogle () {
        this.$store.dispatch('signUserInGoogle')
      },
      onSigninFacebook () {
        this.$store.dispatch('signUserInFacebook')
      },
      onSigninGithub () {
        this.$store.dispatch('signUserInGithub')
      },
      onSigninTwitter () {
        this.$store.dispatch('signUserInTwitter')
      },*/
      onResetPassword () {
        if (this.email === '') {
          return this.$store.dispatch('setError', {message: 'Email can not be blank'})
        }
        this.$store.dispatch('auth/resetPasswordWithEmail', {email: this.email})
      },
      onDismissed () {
        this.$store.dispatch('shared/clearError')
      }
    }
  }
</script>