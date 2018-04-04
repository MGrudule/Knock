<template>
    <div class="row">
        <div class="col-md-12">
            
            <div class="col-md-8">
                <input type="file" v-on:change="onFileChange" class="form-control">
            </div>
            <div class="col-md-2">
                <button class="btn btn-success btn-block" @click="upload">Upload</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    img{
        max-height: 36px;
    }
</style>
<script>
import axios from 'axios'
    export default{
        data(){
            return {
                image: ''
            }
        },
        methods: {
            onFileChange(e) {
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createImage(files[0]);

            },
            createImage(file) {
                let reader = new FileReader();
                let vm = this;
                reader.onload = (e) => {
                    vm.image = e.target.result;
                    this.$emit('uploaded-file', this.image);
                };
                reader.readAsDataURL(file);

            },
            upload(){
                axios.post('/api/upload',{image: this.image}).then(response => {

                });
            }
        }
    }
</script>
