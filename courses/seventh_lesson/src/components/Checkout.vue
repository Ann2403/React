<template>
    <div>
        <form class='col-7 mx-auto mt-3' v-on:submit.prevent>
            <app-input v-for='(obj, index) in info' :key='index' :pattern='obj.pattern'
                       :value="obj.value" :name="obj.name"
                       @changeValid='changeValid($event, index)'>
            </app-input>
            <button :disabled="count !== 1" type="submit" class="btn btn-dark mt-3"
                    @click=''>{{btnName}}</button>
        </form>
    </div> 
</template>

<script>
    import AppInput from './Input';

    export default {
        components: {
            AppInput
        },
        created() {
            for(let i = 0; i < this.info.length; i++) {
                this.control.push(false);
            }
        },
        data() {
            return {
                info: [
                    {
                        name: 'name',
                        value: '',
                        pattern: /^[a-zA-Z]{2,30}$/
                    },
                    {
                        name: 'email',
                        value: '',
                        pattern: /.+/
                    },
                    {
                        name: 'phone',
                        value: '',
                        pattern: /^[0-9]{7,14}$/
                    }
                ],
                count: 0,
                btnName: 'Submit',
                disabledBtn: true,
                control: []
            }
        },
        methods: {
            changeValid(data, index) {
                this.control[index] = data.valid;
                this.info[index].value = data.value;
                let count = 0;
                for (let i = 0; i < this.control.length; i++) {
                    if(this.control[i]) {
                        count++;
                    }
                    this.count = count/this.control.length;
                }
            }
        }
    }
</script>