const ContactList = require("./contactList");

const my_contact_list = new ContactList()

//my_contact_list.add()

my_contact_list.add({
    name: "Gino",
    phone: 42838328,
    country: "Italy"
})

my_contact_list.add({
    name: "Frank",
    phone: 42213328
})
my_contact_list.add({
    name: "Henrick",
    phone: 4221458
})


my_contact_list.remove("Maria")

my_contact_list.searchBy("phone",21 )
my_contact_list.searchBy("name", "frank")

console.log(my_contact_list.getList())