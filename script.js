// script.js
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const contactList = document.getElementById('contactList');

    let contacts = [];

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;

        const contact = { id: Date.now(), name, phone, email };
        contacts.push(contact);

        renderContacts();
        contactForm.reset();
    });

    function renderContacts() {
        contactList.innerHTML = '';
        contacts.forEach(contact => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${contact.name} - ${contact.phone} - ${contact.email}</span>
                <div>
                    <button onclick="editContact(${contact.id})"><img src="edit.png" alt="Edit"></button>
                    <button onclick="deleteContact(${contact.id})"><img src="delete.png" alt="Delete"></button>
                </div>
            `;
            contactList.appendChild(li);
        });
    }

    window.editContact = function(id) {
        const contact = contacts.find(contact => contact.id === id);
        if (contact) {
            document.getElementById('name').value = contact.name;
            document.getElementById('phone').value = contact.phone;
            document.getElementById('email').value = contact.email;
            contacts = contacts.filter(contact => contact.id !== id);
            renderContacts();
        }
    };

    window.deleteContact = function(id) {
        contacts = contacts.filter(contact => contact.id !== id);
        renderContacts();
    };
    // script.js
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const contactList = document.getElementById('contactList');
    const searchInput = document.getElementById('searchName');
    const searchButton = document.getElementById('searchButton');

    let contacts = [];

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;

        const contact = { id: Date.now(), name, phone, email };
        contacts.push(contact);

        renderContacts();
        contactForm.reset();
    });

    function renderContacts(filteredContacts = contacts) {
        contactList.innerHTML = '';
        filteredContacts.forEach(contact => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${contact.name} - ${contact.phone} - ${contact.email}</span>
                <div>
                    <button onclick="editContact(${contact.id})"><img src="edit.png" alt="Edit"></button>
                    <button onclick="deleteContact(${contact.id})"><img src="delete.png" alt="Delete"></button>
                </div>
            `;
            contactList.appendChild(li);
        });
    }

    window.editContact = function(id) {
        const contact = contacts.find(contact => contact.id === id);
        if (contact) {
            document.getElementById('name').value = contact.name;
            document.getElementById('phone').value = contact.phone;
            document.getElementById('email').value = contact.email;
            contacts = contacts.filter(contact => contact.id !== id);
            renderContacts();
        }
    };

    window.deleteContact = function(id) {
        contacts = contacts.filter(contact => contact.id !== id);
        renderContacts();
    };

    searchButton.addEventListener('click', () => {
        const searchName = searchInput.value.toLowerCase();
        const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(searchName));
        renderContacts(filteredContacts);
    });
});
});