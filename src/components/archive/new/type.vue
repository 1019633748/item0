<template>
  <div align='center'>
      <div class="input-w">
          <v-form v-model="valid">
              <v-text-field counter="10" :rules="typeRules" label="类型"></v-text-field>
          </v-form>
      </div>
      <v-btn small @click="submit">提交</v-btn>
  </div>
</template>

<script>
export default {
    data(){
        return{
            valid:false,
            typeRules: [
                v => !!v || '请输入类型',
                v => (v && v.length <= 10) || '账号长度必须小于10',
            ],
        }
    },
    methods:{
        submit(){
            if(this.valid){
                alert()
            }
        }
    }
}
</script>

<style>

</style>