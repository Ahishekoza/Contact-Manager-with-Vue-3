<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success fw-bold">
                    Contact Manager
                    <router-link to="/addContact" class="btn btn-success mx-2 btn-sm"><i
                            class="fa fa-plus-circle"></i>New</router-link>
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At accusamus, vel nihil molestias adipisci
                    eos sapiente distinctio sunt, ea quisquam earum numquam ipsa? Beatae quia laborum fugiat quibusdam
                    doloribus exercitationem!</p>
            </div>
        </div>




        <form>
            <div class="row">
                <div class="col-md-6">
                    <div class="row">
                        <div class="col">
                            <input type="text" placeholder="Search Here..." class="form-control">
                        </div>
                        <div class="col">
                            <input type="submit" class="btn btn-outline-dark">
                        </div>
                    </div>
                </div>
            </div>
        </form>


        <!-- spinner -->

        <div class="container text-center" v-if="loading">
            <div class="row">
                <div class="col">
                    <spinner-vue />
                </div>
            </div>
        </div>

        <!-- ErrorMsg -->
        <div class="container text-center" v-if="!loading && errorMsg != null">
            <div class="row">
                <div class="col">
                    <p class="h3 text-danger fw-bold">{{ errorMsg }}</p>
                </div>
            </div>
        </div>

        <div class="row" v-if="contacts.length > 0">
            <div class="col-md-6" v-for="contact of contacts" :key="contact.id">
                <div class="card mt-3 shadow-lg">
                    <div class="card-body  list-group-item-success">
                        <div class="row align-items-center">
                            <div class="col-sm-4">
                                <img :src="contact.photo" class="contact-image">
                            </div>
                            <div class="col-sm-7">
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        Name : <span class="fw-bold">{{ contact.name }}</span>
                                    </li>
                                    <li class="list-group-item">
                                        Email : <span class="fw-bold">{{ contact.email }}</span>
                                    </li>
                                    <li class="list-group-item">
                                        Mobile : <span class="fw-bold">{{ contact.mobile }}</span>
                                    </li>

                                </ul>
                            </div>
                            <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                                <router-link :to="`/viewContact/${contact.id}`" class="btn btn-warning my-2">
                                    <i class="fa fa-eye"></i>
                                </router-link>
                                <router-link :to="`/editContact/${contact.id}`" class="btn btn-primary my-2">
                                    <i class="fa fa-pen"></i>
                                </router-link>
                                <button @click="deleteItem(contact.id)" class="btn btn-danger my-2">
                                    <i class="fa fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import ContactService from '../ContactService'
import SpinnerVue from './Spinner.vue'
export default {
    name: 'Contact-Manager',
    components: {
        SpinnerVue
    },
    data: function () {
        return {
            loading: false,
            contacts: [],
            errorMsg: null
        }
    },
    created: async function () {
        try {
            this.loading = true
            let response = await ContactService.getAllContacts();
            this.contacts = response.data
            this.loading = false
        }
        catch (error) {
            this.errorMsg = error
            this.loading = false
        }
    },
    methods: {
        deleteItem: async function (id) {

            
            try {
                let response = await ContactService.deleteContact(id)
                if (response) {
                    console.log("deleted Successfully")
                    this.$router.push('/')
                    let response = await ContactService.getAllContacts();
                    this.contacts = response.data
                }
            } catch (error) {
                this.errorMsg = error
            }
        }
    }
}
</script>