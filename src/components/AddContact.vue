<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success">Add Contact</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi dolorum itaque voluptatum velit
                    expedita perspiciatis aliquid accusamus placeat porro esse amet quia excepturi incidunt, nam sit
                </p>
            </div>
        </div>
    </div>


<!-- Form -->
    <div class="container mt-3">
        <div class="row">
            <div class="col-md-4">
                <form @submit.prevent="submitForm()">
                    <div class="mb-2">
                        <input type="text" v-model="contact.name" class="form-control" placeholder="Name">
                    </div>
                    <div class="mb-2">
                        <input type="text" v-model="contact.photo" class="form-control" placeholder="Photo URL">
                    </div>
                    <div class="mb-2">
                        <input type="email" v-model="contact.email" class="form-control" placeholder="Email">
                    </div>
                    <div class="mb-2">
                        <input type="text" v-model="contact.company" class="form-control" placeholder="Company">
                    </div>
                    <div class="mb-2">
                        <input type="number" v-model="contact.mobile" class="form-control" placeholder="Mobile">
                    </div>
                    <div class="mb-2">
                        <input type="text" v-model="contact.title" class="form-control" placeholder="Title">
                    </div>
                    <div class="mb-2">
                        <select class="form-control" v-model="contact.groupId">
                            <option value="">Select Group</option>
                            <option v-for="group of groups" :key="group" :value="group.id">{{ group.name }}</option>
                        </select>
                    </div>
                    <div class="mb-2">
                        <input type="submit" class="btn btn-success" value="Create">
                    </div>
                </form>
            </div>
            <div class="col-md-4">
                <img src="" alt="">
            </div>
        </div>
    </div>


</template>
<script>
import ContactService from '@/ContactService'

export default {
    name: 'Add-Contact',
    data: function () {
        return {
            loading: false,
            contact: {
                name: '',
                email: '',
                company: '',
                title: '',
                mobile: null,
                photo: '',
                groupId: ''
            },
            errorMsg: null,
            groups: []
        }
    },
    mounted: async function () {
        try {
            this.loading = true
            let reponse = await ContactService.getAllGroups()
            this.groups = reponse.data
            this.loading = false
        } catch (error) {
            this.errorMsg = error
            this.loading = false
        }
    },
    methods: {
        submitForm: async function () {
            try {
                let response = await ContactService.createContact(this.contact)
                if (response) {
                    return this.$router.push('/')
                }
                else {
                    return this.$router.push('/addContact')
                }
            } catch (error) {
                this.errorMsg = error
            }
        }
    }
}
</script>