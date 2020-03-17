<template>
<v-app>
    <v-app-bar app color="primary" dark>
        <!-- <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div> -->

        <v-btn v-if="!isLogin" @click="toPage('/')" target="_blank" text>
            <span class="item-name">系统</span>
        </v-btn>

        <v-spacer></v-spacer>

        <div class="is-login-div" v-if="isLogin">
            <span>用户名</span>
        </div>

        <v-btn v-if="(!isLogin)" @click="toPage('login')" target="_blank" text>
            <span class="mr-2">登录</span>
            <v-icon>mdi-login</v-icon>
        </v-btn>
    </v-app-bar>

    <v-content>
        <router-view />
    </v-content>
</v-app>
</template>

<script>

export default {
    name: 'App',
    components: {

    },

    data: () => ({
        isLogin: !true,
    }),
    methods: {
        toPage(name) {
            this.$router.push(name)
        },
    }
};
</script>
