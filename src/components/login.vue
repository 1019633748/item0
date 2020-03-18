<template>
    <v-content>
        <v-card  class="login-form elevation-12">
            <div>
                <v-form v-model="valid" lazy-validation ref="form">
                    <v-text-field label="账号" :counter="10" :rules="nameRules" required></v-text-field>

                    <v-text-field label="密码" :counter="20" :rules="passwordRules" required></v-text-field>

                </v-form> 

                <v-btn block @click="submit">登录</v-btn>
            </div>
        </v-card>
    </v-content>
</template>

<script>
//import {login,loginTest} from '../api/loginApi'
export default {
    data() {
        return {
            valid: true,
            nameRules: [
                v => !!v || '请输入账号',
                v => (v && v.length <= 10) || '账号长度必须小于10',
            ],
            passwordRules: [
                v => !!v || '请输入密码',
                v => (v && v.length <= 20) || '密码长度必须小于20',
            ]
        }
    },
    created() {
        //login('1','2')
        //loginTest()
    },
    methods: {
        submit() {
            this.$refs.form.validate()
        }
    }
}
</script>

<style>
.login-form {
    width: 400px;
    margin: 0 auto;
    padding: 10px;
}
</style>
