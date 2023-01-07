<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success">View Contact</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi dolorum itaque voluptatum velit
                    expedita perspiciatis aliquid accusamus placeat porro esse amet quia excepturi incidunt, nam sit
                    suscipit. Dolorum, doloremque laborum?</p>


            </div>
        </div>


    </div>

        <!-- spinner -->

        <div class="container text-center" v-if="loading">
            <div class="row">
                <div class="col">
                    <spinner-vue />
                </div>
            </div>
        </div>

        <!-- ErrorMsg -->
        <div class="container text-center" v-if="!loading && errorMsg!=null">
            <div class="row">
                <div class="col">
                    <p class="h3 text-danger fw-bold">{{ errorMsg }}</p>
                </div>
            </div>
        </div>

    <div class="container mt-3">
        <div class="row align-itemds-center">
            <div class="col-md-4">
                <img :src="contacts.photo"
                    class="contact-image" alt="" srcset="">
            </div>
            <div class="col-md-6">
                <ul class="list-group">
                    <li class="list-group-item">
                        Name : <span class="fw-bold">{{contacts.name}}</span>
                    </li>
                    <li class="list-group-item">
                        Email : <span class="fw-bold">{{contacts.email}}</span>
                    </li>
                    <li class="list-group-item">
                        Mobile : <span class="fw-bold">{{contacts.mobile}}</span>
                    </li>
                    <li class="list-group-item">
                        Group : <span class="fw-bold">{{group}}</span>
                    </li>
                </ul>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <router-link class="btn btn-success btn-sm" to="/"><i
                        class="fa fa-arrow-alt-circle-left"></i>Back</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import ContactService from '@/ContactService';
import SpinnerVue from './Spinner.vue';
export default {
    name: 'View-Contact',
    components:{
        SpinnerVue
    },
    data: function () {
        return {
            id:null,
            loading:false,
            contacts: [],
            errorMsg:null,
            group:''
        }
    },
    created: async function () {
    
        this.id=this.$route.params.id

        try {

            let reponse= await ContactService.getContacts(this.id)
            this.contacts=reponse.data
            
            // ---------------You have to pass whole object
            let getGroupName=await ContactService.getGroup(reponse.data)
            this.group=getGroupName.data.name

        } catch (error) {
            this.errorMsg=error
        }
    }

}
</script>