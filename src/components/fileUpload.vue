<template>
    <div class="row">

        <div class="col-md-8">


                <input type="file" v-on:change="onFileChange" class="form-control">



        </div>
        <div class="col-md-4">
          {{uploadstatuss}}
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default{
        data(){
            return {
                image: '',
                uploadstatuss: "",

            }
        },
        methods: {
            onFileChange(e) {

                let files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createImage(files[0]);

                  this.upload(files[0]);

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
            upload(value){



              const formData = new FormData();
              formData.append( 'file', value);
                  axios.post("https://knockonthedoor.vps.codegorilla.nl/api/profile/image",
                      formData ,
                      {
                          headers: { Authorization: "Bearer " + localStorage.getItem('api_token'), 'Content-Type': 'multipart/form-data' }
                    })

                    .then((response)  =>  {
                      this.uploadstatuss = "Your image has been updated"

                    }, (error)  =>  {
                      this.uploadstatuss = "sorry, selected image is too big. Please select a smaller image."

                    })
            }


        }
    }
</script>
