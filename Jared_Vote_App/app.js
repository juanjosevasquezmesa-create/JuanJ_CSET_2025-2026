const prompt = require("prompt-sync")();
const fs = require("fs");
const bcrypt = require("bcrypt");
class User {
    constructor(username, password, hint) {
        this.username = username;
        this.passwordHash = bcrypt.hashSync(password, 10);
        this.hint = hint;
        this.votes = {};
    }
    checkPassword(input) {
        return bcrypt.compareSync(input, this.passwordHash);
    }
}
class Poll {
    constructor(id, question, options) {
        this.id = id;
        this.question = question;
        this.options = options;
        this.votes = {};
    }
    vote(username, choice) {
        this.votes[username] = choice;
    }
    viewResults() {
        const counts = {};
        for (const opt of this.options) counts[opt] = 0;
        for (const vote of Object.values(this.votes)) counts[vote]++;
        return counts;
    }
}
class System {
    constructor(masterPassword = "ADMIN") {
        this.users = [];
        this.polls = [];
        this.currentUser = null;
        this.masterPasswordHash = bcrypt.hashSync(masterPassword, 10);
    }
    checkMasterPassword(input) {
        return bcrypt.compareSync(input, this.masterPasswordHash);
    }
    signUp(username, password, hint) {
        if (this.users.some(u => u.username === username)) {
            console.log(`${username} already exists!`);
            return;
        }
        this.users.push(new User(username, password, hint));
        this.saveUsers();
        console.log(`User ${username} created successfully!`);
        return true;
    }
    logIn(username, password) {
        const user = this.users.find(u => u.username === username);
        if (!user) {
            console.log(`${user} not found!`);
            return false;
        }
        if (this.checkAuth(user, password)) {
            this.currentUser = user;
            console.log(`Welcome, ${username}!`);
            return true;
        }
        else {
            console.log(`Incorrect password! Hint: `, user.hint);
            return false;
        }
    }
    saveUsers(filename = "users.json") {
        const data = JSON.stringify(this.users, null, 2);
        fs.writeFileSync(filename, data);
        console.log(`Users saved to file!`);
    }
    loadUsers(filename = "users.json") {
        if (!fs.existsSync(filename)) return;
        const data = fs.readFileSync(filename);
        const usersArray = JSON.parse(data);
        this.users = usersArray.map(u => {
            const user = new User(u.username, "temp", u.hint);
            user.passwordHash = u.passwordHash;
            user.votes = u.votes || {};
            return user;
        });
        console.log("Users loaded from file!");
    }
    deleteUsers(usernameToDelete) {
        const idx = this.users.findIndex(u => u.username === usernameToDelete);
        if (idx === -1) {
            console.log(`${usernameToDelete} is not a User`);
            return false;
        }
        const pw = prompt("Enter password to confirm deletion of user: ");
        const targetUser = this.users[idx];
        if (!this.checkAuth(targetUser, pw)) {
            console.log("Authentication failure, user not deleted.");
            return false;
        }
        this.users.splice(idx, 1);
        if (this.currentUser && this.currentUser.username === usernameToDelete) {
            this.currentUser = null;
        }
        this.saveUsers();
        console.log(`User "${usernameToDelete}" deleted.`);
    }
    checkAuth(user, inputPassword) {
        if (!inputPassword) return false;
        if (this.checkMasterPassword(inputPassword)) return true;
        if (user && user.checkPassword(inputPassword)) return true;
        return false;
    }
    checkUsers() {
        const pw = prompt("Enter Master Passkey: ");
        if (!this.checkMasterPassword(pw)) {
            console.log("Incorrect Master Passkey.");
            return;
        }
        console.log(`All users: `);
        this.users.forEach(u => {
            console.log(`Username: ${u.username}`);
        });
    }
    savePolls(filename = "polls.json") {
        fs.writeFileSync(filename, JSON.stringify(this.polls, null, 2));
    }
    loadPolls(filename = "polls.json") {
        if (!fs.existsSync(filename)) return;
        const data = fs.readFileSync(filename);
        const pollsArray = JSON.parse(data);
        this.polls = pollsArray.map(p => {
            const poll = new Poll(p.id, p.question, p.options);
            poll.votes = p.votes || {};
            return poll;
        })
    }
    adminManage() {
        while (true) {
            console.log("Admin Menu\n1. Browse Polls\n2. Browse Poll Results\n3. Manage Users\n4. Poll Creation\n5. Main Menu");
            const choice = prompt("");
            switch (choice) {
                case "1": { 
                    if (this.polls.length === 0) {
                        console.log("No polls available.");
                    }
                    else {
                        this.polls.forEach(p => console.log(`${p.id}: ${p.question}`));
                    }
                    break;
                }
                case "2": {
                    if (this.polls.length === 0) {
                        console.log("No polls available.");
                    }
                    else {
                        this.polls.forEach(p => {
                            console.log(`${p.id}: ${p.question}`);
                            console.log("Results:", p.viewResults());
                        });
                    }
                    break;
                }
                case "3": {
                    this.checkUsers();
                    const usernameToDelete = prompt("Enter user to delete: ");
                    this.deleteUsers(usernameToDelete);
                    break;
                }
                case "4": {
                    const question = prompt("Enter poll question: ");
                    const options = prompt("Enter options (comma-separated)").split(",");
                    const id = this.polls.length + 1;
                    this.polls.push(new Poll(id, question, options.map(o => o.trim())));
                    this.savePolls();
                    console.log(`${question} Poll created!`);
                    break;
                }
                case "5": {
                    return;
                }
                default: {
                    console.log("Invalid option");
                }
            }
        }
    }
    userMenu() {
        if (!this.currentUser) {
            console.log("You must log in first!");
            return;
        }
        while (true) {
            console.log(`User Menu\n1. View All Polls\n2. Vote on a Poll\n3. View my Votes\n4. Main Menu\n5. Log Out`);
            const choice = prompt("");
            switch (choice) {
                case "1": {
                    this.polls.forEach(p => console.log(`${p.id}: ${p.question}`));
                    break;
                }
                case "2": {
                    let poll;
                    while (true) {
                        const idInput = prompt(`Enter the poll to vote on (or "b" to go back): `);
                        if (idInput.toLowerCase() === "b") break;
                        const id = parseInt(idInput);
                        poll = this.polls.find(p => p.id === id);
                        if (!poll) {
                            console.log("Invalid Poll ID");
                        }
                        else {
                            break;
                        }
                    }
                    if (!poll) break;
                    console.log(`Question: ${poll.question}`);
                    poll.options.forEach((opt, i) => console.log(`${i + 1}) ${opt}`));
                    while (true) {
                        const optInput = prompt(`Choose an option number (or "b" to go back): `);
                        if (optInput.toLowerCase() === "b") break;
                        const optIndex = parseInt(optInput);
                        if (isNaN(optIndex) || optIndex < 1 || optIndex > poll.options.length) {
                            console.log("Invalid option choice! Try again please");
                        }
                        else {
                            const choiceStr = poll.options[optIndex - 1];
                            poll.vote(this.currentUser.username, choiceStr);
                            this.savePolls();
                            console.log(`Vote successfully registered!`);
                            break;
                        }
                    }
                    break;
                }
                case "3": {
                    console.log("Your previous votes");
                    this.polls.forEach(p => {
                        const vote = p.votes[this.currentUser.username] || "N/A";
                        console.log(`${p.question}: ${vote}`);
                    });
                    break;
                }
                case "4": {
                    return;
                }
                case "5": {
                    this.logOut();
                    return;
                }
                default: {
                    console.log("Invalid option");
                }
            }
        }
    }
    logOut() {
        if (!this.currentUser) {
            console.log("No user current signed in.");
            return;
        }
        console.log(`User ${this.currentUser.username} logged out.`);
        this.currentUser = null;
    }
}

const system = new System();
system.loadUsers();
system.loadPolls();
function mainMenu() {
    while (true) {
        console.log("Main Menu\n1. Sign Up:\n2. Log In\n3. Manage Users & Polls\n4. Admin Manage\n5. Exit");
        const choice = prompt("");
        switch (choice) {
            case "1": {
                const username = prompt("Username: ");
                const password = prompt("Password: ");
                const hint = prompt("Hint: ");
                system.signUp(username, password, hint);
                break;
            }
            case "2": {
                if (system.currentUser) {
                    console.log(`You are already logged in, ${system.currentUser.username}.`);
                    system.userMenu();
                    break;
                }
                const u = prompt("Username: ");
                const p = prompt("Password: ");
                if (system.logIn(u, p)) {
                    system.userMenu();
                };
                break;
            }
            case "3": {
                system.adminManage();
                break;
            }
            case "4": {
                system.checkUsers();
                break;
            }
            case "5": {
                console.log("Bye!");
                process.exit();
            }
            default: {
                console.log("Invalid option");
            }
        }
    }
}
mainMenu();
