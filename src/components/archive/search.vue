<template>
<div align='center'>
    <div class="input-w">
        <v-row>
            <v-col>
                <v-menu ref="menu1" v-model="menu1" :close-on-content-click="false" max-width="100px" :return-value.sync="date" transition="scale-transition" offset-y min-width="290px">
                    <template v-slot:activator="{ on }">
                        <v-text-field dense v-model="query.startDate" label="起始日期" readonly v-on="on"></v-text-field>
                    </template>
                    <v-date-picker v-model="query.startDate" no-title scrollable locale="zh-Hans-CN" @input="menu1 = false">>
                    </v-date-picker>
                </v-menu>
            </v-col>

            <v-col>
                <v-menu ref="menu2" v-model="menu2" :close-on-content-click="false" :return-value.sync="date" transition="scale-transition" offset-y min-width="290px">
                    <template v-slot:activator="{ on }">
                        <v-text-field dense v-model="query.endDate" label="起始日期" readonly v-on="on"></v-text-field>
                    </template>
                    <v-date-picker v-model="query.endDate" no-title scrollable locale="zh-Hans-CN" @input="menu2 = false">>
                    </v-date-picker>
                </v-menu>
            </v-col>

        </v-row>

        <v-row>
            <v-col>
                <v-combobox dense :items="types" label="类型"></v-combobox>
            </v-col>
            <v-col>
                <v-text-field dense label="查询字段"></v-text-field>
            </v-col>
            <v-col>
                <v-btn small width="90px">搜 索</v-btn>
            </v-col>
        </v-row>
    </div>

    <div style="width:60%">

        <v-data-table :headers="headers" :items="desserts" sort-by="calories" class="elevation-0">
            <template v-slot:top>
                <v-toolbar dense flat color="white">
                    <v-toolbar-title>文档列表</v-toolbar-title>
                    <!-- <v-divider class="mx-4" inset vertical></v-divider> -->
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="500px">
                        <template v-slot:activator="{ on }">
                            <v-btn color="primary" dark class="mb-2" v-on="on">新 建</v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="headline">{{ formTitle }}</span>
                            </v-card-title>

                            <v-card-text>
                                <v-container>
                                    <!-- <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.name" label="文档名"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
                                        </v-col>
                                    </v-row> -->

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
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="close">取消</v-btn>
                                <v-btn color="blue darken-1" text @click="save">确认</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>
            <template v-slot:item.protein="{ item }">
                <v-btn text small>下载</v-btn>{{item.protein }}
            </template>
            <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="editItem(item)">
                    mdi-pencil
                </v-icon>
                <v-icon small @click="deleteItem(item)">
                    mdi-delete
                </v-icon>
            </template>
            <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">Reset</v-btn>
            </template>
        </v-data-table>

    </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            query: {
                startDate: '',
                endDate: ''
            },
            //date: new Date().toISOString().substr(0, 10),
            date: '',
            menu1: false,
            menu2: false,
            types: [
                '1',
                '2'
            ],
            dialog: false,
            headers: [{
                    text: '类型',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                {
                    text: '文档名',
                    value: 'calories',
                    sortable: false,
                },
                {
                    text: '存档日期',
                    value: 'fat',
                    sortable: false
                },
                {
                    text: '存放位置',
                    value: 'carbs',
                    sortable: false
                },
                {
                    text: '附件',
                    value: 'protein',
                    sortable: false
                },
                {
                    text: '备注',
                    value: 'actions',
                    sortable: false
                },
            ],
            desserts: [],
            editedIndex: -1,
            editedItem: {
                name: '',
                calories: 0,
                fat: 0,
                carbs: 0,
                protein: 0,
            },
            defaultItem: {
                name: '',
                calories: 0,
                fat: 0,
                carbs: 0,
                protein: 0,
            },

        }
    },
    computed: {
        formTitle() {
            return this.editedIndex === -1 ? '新建文档' : '编辑文档'
        },
    },

    watch: {
        dialog(val) {
            val || this.close()
        },
    },
    created() {
        this.initialize()
    },
    methods: {
        initialize() {
            this.desserts = [{
                    name: 'Frozen Yogurt',
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                },
                {
                    name: 'Ice cream sandwich',
                    calories: 237,
                    fat: 9.0,
                    carbs: 37,
                    protein: 4.3,
                },
                {
                    name: 'Eclair',
                    calories: 262,
                    fat: 16.0,
                    carbs: 23,
                    protein: 6.0,
                },
                {
                    name: 'Cupcake',
                    calories: 305,
                    fat: 3.7,
                    carbs: 67,
                    protein: 4.3,
                },
                {
                    name: 'Gingerbread',
                    calories: 356,
                    fat: 16.0,
                    carbs: 49,
                    protein: 3.9,
                },
                {
                    name: 'Jelly bean',
                    calories: 375,
                    fat: 0.0,
                    carbs: 94,
                    protein: 0.0,
                },
                {
                    name: 'Lollipop',
                    calories: 392,
                    fat: 0.2,
                    carbs: 98,
                    protein: 0,
                },
                {
                    name: 'Honeycomb',
                    calories: 408,
                    fat: 3.2,
                    carbs: 87,
                    protein: 6.5,
                },
                {
                    name: 'Donut',
                    calories: 452,
                    fat: 25.0,
                    carbs: 51,
                    protein: 4.9,
                },
                {
                    name: 'KitKat',
                    calories: 518,
                    fat: 26.0,
                    carbs: 65,
                    protein: 7,
                },
            ]
        },

        editItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem(item) {
            const index = this.desserts.indexOf(item)
            confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
        },

        close() {
            this.dialog = false
            setTimeout(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            }, 300)
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.desserts[this.editedIndex], this.editedItem)
            } else {
                this.desserts.push(this.editedItem)
            }
            this.close()
        },
    },
}
</script>

<style>

</style>
