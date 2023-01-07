<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success">Edit Contact</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi dolorum itaque voluptatum velit
                    expedita perspiciatis aliquid accusamus placeat porro esse amet quia excepturi incidunt, nam sit
                    suscipit. Dolorum, doloremque laborum?</p>
            </div>
        </div>
    </div>



    <div class="container mt-3">
        <div class="row">
            <div class="col-md-4">
                <form @submit.prevent="updateForm()">
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Name" v-model="contact.name">
                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Photo URL" v-model="contact.photo">
                    </div>
                    <div class="mb-2">
                        <input type="email" class="form-control" placeholder="Email" v-model="contact.email">
                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Company" v-model="contact.company">
                    </div>
                    <div class="mb-2">
                        <input type="number" class="form-control" placeholder="Mobile" v-model="contact.mobile">
                    </div>
                    <div class="mb-2">
                        <input type="text" class="form-control" placeholder="Title" v-model="contact.title">
                    </div>
                    <div class="mb-2">
                        <select v-model="contact.groupId" class="form-control">
                            <option value="">Select Group</option>
                            <option v-for="group of groups" :key="group" :value="group.id">{{ group.name }}</option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <input type="submit" class="btn btn-success" value="Update">
                    </div>
                </form>
            </div>
        </div>
    </div>


</template>
<script>
import ContactService from '@/ContactService';

export default {
    name: 'Edit-Contact',
    data:function(){
        return{
            id:null,
            loading:false,
            contact:{},
            errorMsg:null,
            groups:[],
            
        }
    }
    ,
    created:async function(){
        
        try {

            this.id=this.$route.params.id
            console.log(this.id)
            let reponse= await ContactService.getContacts(this.id)
            this.contact=reponse.data


            let groupsResponse=await ContactService.getAllGroups()
            this.groups=groupsResponse.data

        } catch (error) {
            this.errorMsg=error
        }
    },
    methods:{
        updateForm:async function(){
          try {
            let updatedResponse = await ContactService.updateContact(this.contact,this.id)
           if(updatedResponse){
            console.log("Successfully updated")
            this.$router.push('/')
           }
          } catch (error) {
            this.errorMsg=error
          }
        }
    }

}
</script>