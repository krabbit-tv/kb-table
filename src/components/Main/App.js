import KbTable from './../KbTable/KbTable.vue';
import axios from 'axios';

export default {
    name: 'app',
    data () {
        return {
            datos: [],
            headers: [
                {
                    key: 'id',
                    name: 'Id'
                },
                {
                    key: 'name',
                    name: 'Name'
                },
                {
                    key: 'author',
                    name: 'Author'
                }
            ],
            identifyBy: 'id'
        };
    },
    components: {
        KbTable
    },
    created() {
        axios.get('http://localhost:3000/books/').then(((response)=>{
            this.datos = response.data;
        }).bind(this), (err) => {
            console.log("Error: " + err);
        });        
    },
    methods: {
        selectRow(row) {
            console.log(JSON.stringify(row));
        }
    }
};