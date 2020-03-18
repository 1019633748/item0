<template>
<div class="py-2">
    <div align="center">
        <v-btn-toggle>
            <v-btn text small @click="search">查询</v-btn>
            <v-btn text small @click="neuu">新建</v-btn>
        </v-btn-toggle>
    </div>

    <router-view />
</div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        neuu() {
            this.$router.push('/archive/new')
        },
        search() {
            this.$router.push('/archive/search')
        }
    }
}
</script>

<style>

</style>
