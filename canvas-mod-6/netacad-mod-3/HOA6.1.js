const prompt = require('prompt-sync')();

let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

let running = true;

while (running) {
    let action = prompt("Choose: show, all, add, search, or quit: ");

    if (action === "show") {
        let index = prompt("Enter the contact index number: ");
        if (contacts[index]) {
            console.log(`${contacts[index].name} / ${contacts[index].phone} / ${contacts[index].email}`);
        } else {
            console.log("Error: Index does not exist.");
        }

    } else if (action === "all") {
        for (let i = 0; i < contacts.length; i++) {
            console.log(`${i}: ${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
        }

    } else if (action === "add") {
        let name = prompt("Name: ");
        let phone = prompt("Phone: ");
        let email = prompt("Email: ");

        if (name && phone && email) {
            contacts.push({ name: name, phone: phone, email: email });
            console.log("Added successfully!");
        } else {
            console.log("Error: Missing data. Not added.");
        }

    } else if (action === "search") {
        let searchName = prompt("Enter the name to search for: ");
        let found = false;

        for (let i = 0; i < contacts.length; i++) {
            if (contacts[i].name.toLowerCase() === searchName.toLowerCase()) {
                console.log(`Found: ${contacts[i].name} - ${contacts[i].phone} / ${contacts[i].email}`);
                found = true;
                break; 
            }
        }
        if (!found) console.log("Contact not found.");

    } else if (action === "quit") {
        running = false;
        console.log("Exiting manager.");

    } else {
        console.log("Invalid option.");
    }
}