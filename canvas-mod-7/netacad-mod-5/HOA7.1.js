const prompt = require('prompt-sync')();

let contacts = [
    {
        name: "Linus Torvalds",
        role: "System Admin",
        skills: ["Linux", "Git", "Kernels"],
        availability: true
    },
    {
        name: "Ada Lovelace",
        role: "Logic Analyst",
        skills: ["Algorithms", "Math", "Analytics"],
        availability: false
    },
    {
        name: "Alan Turing",
        role: "Cryptographer",
        skills: ["Logic", "Enigma", "Security"],
        availability: true
    }
];

while (true) {
    let action = prompt("Choose: show, all, add, search, or quit: ");
    if (!action) continue; 
    action = action.toLowerCase();

    if (action === "show") {
        let index = prompt("Enter index: ");
        let contact = contacts[index];
        if (contact) {
            console.log(`Name: ${contact.name}, Role: ${contact.role}, Skill: ${contact.skills[0]}`);
        } else {
            console.log("Invalid index.");
        }

    } else if (action === "all") {
        for (let i = 0; i < contacts.length; i++) {
            console.log(`${i}: ${contacts[i].name}`);
        }

    } else if (action === "add") {
        let name = prompt("Name: ");
        let role = prompt("Role: ");
        let skill = prompt("Skill: ");

        if (name && role && skill) {
            contacts.push({
                name: name,
                role: role,
                skills: [skill],
                availability: true
            });
            console.log("Added successfully.");
        } else {
            console.log("All fields required.");
        }

    } else if (action === "search") {
        let searchName = prompt("Search Name: ");
        let found = false;

        for (let i = 0; i < contacts.length; i++) {
            let contact = contacts[i];
            // Fix: Check if contact exists and name matches
            if (contact && contact.name.toLowerCase() === searchName.toLowerCase()) {
                let status = contact.availability ? "Available" : "Busy";
                console.log(`Found: ${contact.name} | Role: ${contact.role} | Status: ${status}`);
                found = true;
                break;
            }
        }
        if (!found) console.log("Not found.");

    } else if (action === "quit") {
        console.log("Goodbye!");
        break;
    }
}