class ContactList {
  /**
   * Simple Contact List class
   */
  constructor() {
    this._list = [];
  }

  /**
   * Check if the new_contact object is a valid new contact
   * Validates, if has the name and phone keys, check if the name is a string
   * and the phone is a number and it has at least 5 digits
   * @param {name:string phone:nubmer} new_contact
   */
  isContactValid(new_contact) {
    if (
      new_contact.hasOwnProperty("name") &&
      new_contact.hasOwnProperty("phone")
    ) {
      if (
        typeof new_contact.name !== "string" ||
        new_contact.name.trim().length === 0
      ) {
        throw new Error(`The contact name ${new_contact.name} is not valid`)
      }
      if (
        typeof new_contact.phone !== "number" ||
        new_contact.phone.toString().length < 5
      ) {
        throw new Error(`The contact phone ${new_contact.phone} is not valid`)
      }
    } else {
      throw new Error("the contact needs to have a name and a phone")
    }
  }

  /**
   * Method for add a contact to the list
   * @param { name: String, phone: number} contact
   */
  add(new_contact) {
    try {
      this.isContactValid(new_contact)
      if (this._list.length === 0) {
        this._list.push(new_contact)
      } else {
        const contact = this._list.some(obj => {
          return obj.name === new_contact.name
        })
        if (contact) {
          console.log(
            "A contact with the name " + new_contact.name + " already exists"
          )
        } else {
          this._list.push(new_contact)
          return;
        }
      }
    } catch (error) {
      console.log(error.message)
    }
  }
//remove contact
remove(name){
  if (this._list.length === 0) {
    console.log(" the list is empty");
  } else if(this._list.name !== name){
    console.log('There is no contact with the name ' + name + ' .');
  }
   else {
    const newContactsArray = this._list.filter(contact =>  contact.name !== name)
  }
}
// use filter 
searchBy(key, value) { 
  const result = this._list.filter(contact => contact[key] === value)
  console.log(`Search results for: ${value}`, result);
} 

  getList() {
    return this._list;
  }
}

module.exports = ContactList;