import axios from 'axios'

export default class ContactService{

    static baseUrl=`http://localhost:3000`

    static getAllContacts(){
        let dataUrl=`${this.baseUrl}/contacts`
        return axios.get(dataUrl)
    }

    static getContacts(id){
        let dataUrl=`${this.baseUrl}/contacts/${id}`
        return axios.get(dataUrl)
    }

    static createContact(contact){
        let dataUrl=`${this.baseUrl}/contacts`
        return axios.post(dataUrl,contact)
    }

    static deleteContact(id){
        let dataUrl=`${this.baseUrl}/contacts/${id}`
        return axios.delete(dataUrl)
    }

    static updateContact(contact,id){
        let dataUrl=`${this.baseUrl}/contacts/${id}`
        return axios.put(dataUrl,contact)
    }

    static getAllGroups(){
        let dataUrl=`${this.baseUrl}/groups`
        return axios.get(dataUrl)
    }

    static getGroup(contact){
        let dataUrl=`${this.baseUrl}/groups/${contact.groupId}`
        return axios.get(dataUrl)
    }

}