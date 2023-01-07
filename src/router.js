import {createRouter,createWebHistory} from 'vue-router'
import HomeVue from './components/Home.vue'
import ContactManagerVue from './components/ContactManager.vue'
import ViewContactVue from './components/ViewContact.vue'
import EditContactVue from './components/EditContact.vue'
import AddContactVue from './components/AddContact.vue'
import PageNotFoundVue from './components/PageNotFound.vue'
const routes=[
    {
        path:'/',
        name:'Home-Component',
        redirect:'/contactManager',
        component:HomeVue
    },
    {
        path:'/contactManager',
        name:'ContactManager',
        component:ContactManagerVue
    },

    {
        path:'/addContact',
        name:'AddContact',
        component:AddContactVue
    },

    {
        path:'/viewContact/:id',
        name:'ViewContact',
        component:ViewContactVue
    },
    
    
    {
        path:'/editContact/:id',
        name:'EditContact',
        component:EditContactVue
    },
    {
        path:'/:pathMatch(.*)*',
        name:'PageNotFound',
        component:PageNotFoundVue
    }
]



const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes
});

export default router