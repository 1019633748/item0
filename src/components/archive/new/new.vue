<template>
<div>
    <div align='center' class='py-1'>
        <v-btn-toggle>
            <v-btn text small @click="newType">新建类型</v-btn>
            <v-btn text small @click="newItem">新建文档</v-btn>
        </v-btn-toggle>
    </div>
    <div>
        <router-view/>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        newType(){
            this.$router.push('/archive/new/type')
        },
        newItem(){
            this.$router.push('/archive/new/item')
        }
    }
}
</script>

<style>

</style>
