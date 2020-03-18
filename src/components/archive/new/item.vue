<template>
<div align='center'>
    <div class="input-w">
        <v-form>
            <v-combobox :items="types" label="类型"></v-combobox>
            <v-text-field counter="50" label="文档名"></v-text-field>

            <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y min-width="290px">
                <template v-slot:activator="{ on }">
                    <v-text-field v-model="date" label="存档日期" readonly v-on="on"></v-text-field>
                </template>
                <v-date-picker v-model="date" no-title scrollable locale="zh-Hans-CN">
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">取消</v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(date)">确认</v-btn>
                </v-date-picker>
            </v-menu>

            <v-text-field counter="20" label="存放位置"></v-text-field>
            <v-file-input label="上传附件" prepend-icon></v-file-input>
            <v-textarea counter="100" label="备注"></v-textarea>
        </v-form>
        <v-btn small>提交</v-btn>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            types: [
                '1',
                '2'
            ],
            //date: new Date().toISOString().substr(0, 10),
            date:'',
            menu: false
        }
    }
}
</script>

<style>

</style>
