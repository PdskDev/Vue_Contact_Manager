import axios from 'axios';

export class ContactService {
  static serverURL = `http://localhost:9000`;

  //Get all contacts
  static getAllContacts() {
    let dataURL = `${this.serverURL}/contacts/`;
    return axios.get(dataURL);
  }
  //Get single contact
  static getOneContact(contactID) {
    let dataURL = `${this.serverURL}/contacts/${contactID}`;
    return axios.get(dataURL);
  }

  //Create contact
  static createContact(contact) {
    let dataURL = `${this.serverURL}/contacts/`;
    return axios.post(dataURL, contact);
  }

  //Update contact
  static updateContact(contact, contactID) {
    let dataURL = `${this.serverURL}/contacts/${contactID}`;
    return axios.put(dataURL, contact);
  }

  //Delete contact
  static deleteContact(contactID) {
    let dataURL = `${this.serverURL}/contacts/${contactID}`;
    return axios.delete(dataURL);
  }

  //Get all group
  static getAllGroups() {
    let dataURL = `${this.serverURL}/groups/`;
    return axios.get(dataURL);
  }

  //Get one group
  static getOneGroup(contact) {
    let groupId = contact.groupId;
    let dataURL = `${this.serverURL}/groups/${groupId}`;
    return axios.get(dataURL);
  }
}
