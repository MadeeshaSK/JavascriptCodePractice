// Check if bcrypt is available and handle alternatives
const isBcryptAvailable = typeof bcrypt !== 'undefined';

// Function to toggle between login and register views
const clearAndLoad = (context) => {
    if (context === 'login') {
        $('#register-context').hide();
        $('#login-context').show();
        $('#customer-management').hide();
    } else if (context === 'register') {
        $('#login-context').hide();
        $('#register-context').show();
        $('#customer-management').hide();
    } else if (context === 'customer') {
        $('#login-context').hide();
        $('#register-context').hide();
        $('#customer-management').show();
    }
}

let userArr = [];
let customerArr = [];
let editCustomerId = null; // To track which customer is being edited

class User {
    constructor(fullname, email, password) {
        this.fullname = fullname;
        this.email = email;
        this.password = password;
    }
}

class Customer {
    constructor(name, phone, email, nic) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.nic = nic;
    }
}

const createUser = () => {
    const fullName = $('#register-name').val().trim();
    const email = $('#register-email').val().trim();
    const password = $('#register-password').val().trim();

    if (!fullName || !email || !password) {
        alert("All fields are required!");
        return;
    }

    let existsUserData = userArr.find(user => user.email === email);
    if (existsUserData) {
        alert("User email already exists!");
        return;
    }

    try {
        let hashedPassword;

        if (isBcryptAvailable) {
            // Using synchronous methods from bcryptjs if available
            const salt = bcrypt.genSaltSync(10);
            hashedPassword = bcrypt.hashSync(password, salt);
        } else {
            // Fallback when bcrypt is not available
            console.warn("Bcrypt not available - storing password without hashing (NOT SECURE)");
            hashedPassword = password; // Not secure, only for development
        }

        let newUser = new User(fullName, email, hashedPassword);
        userArr.push(newUser);

        console.log("User created:", newUser);

        $('#register-name').val('');
        $('#register-email').val('');
        $('#register-password').val('');

        alert("User registered successfully!");
        clearAndLoad('login'); // Redirect to login after successful registration
    } catch (error) {
        console.error("Error hashing password:", error);
        alert("Registration failed. Please try again.");
    }
}

const login = () => {
    const email = $('#email').val().trim();
    const password = $('#password').val().trim();

    if (!email || !password) {
        alert("Email and password are required!");
        return;
    }

    let existsUserData = userArr.find(user => user.email === email);

    if (existsUserData) {
        try {
            let isMatch = false;

            if (isBcryptAvailable) {
                // Using synchronous method from bcryptjs if available
                isMatch = bcrypt.compareSync(password, existsUserData.password);
            } else {
                // Fallback when bcrypt is not available
                isMatch = (password === existsUserData.password);
            }

            if (isMatch) {
                alert("Login successful!");
                // Show customer management section
                clearAndLoad('customer');
                // Clear login form
                $('#email').val('');
                $('#password').val('');
            } else {
                alert("Invalid password!");
            }
        } catch (error) {
            console.error("Error comparing passwords:", error);
            alert("Login failed. Please try again.");
        }
    } else {
        alert("User not found!");
    }
}

const createCustomer = () => {
    const name = $('#customer-name').val().trim();
    const phone = $('#customer-phone').val().trim();
    const email = $('#customer-email').val().trim();
    const nic = $('#customer-nic').val().trim();

    if (!name || !phone || !email || !nic) {
        alert("All fields are required!");
        return;
    }

    // If we're in edit mode, update the customer
    if (editCustomerId !== null) {
        updateCustomerData(editCustomerId);
        return;
    }

    // Check if customer already exists
    let existsCustomerData = customerArr.find(element => element.nic === nic);
    if (existsCustomerData) {
        alert("Customer already exists!");
        return;
    }

    const customer = new Customer(name, phone, email, nic);
    customerArr.push(customer);
    alert("Customer created successfully!");

    // Clear the form
    clearCustomerForm();

    // Refresh the customer list
    loadCustomers();
}

const clearCustomerForm = () => {
    $('#customer-name').val('');
    $('#customer-phone').val('');
    $('#customer-email').val('');
    $('#customer-nic').val('');
    editCustomerId = null;

    // Change button text back to "Save Customer"
    $('.btn-success').text('Save Customer');
}

const findCustomer = (id) => {
    return customerArr.find(element => element.nic === id) || null;
}

const updateCustomer = (id) => {
    let customer = findCustomer(id);
    if (customer) {
        // Set form values
        $('#customer-name').val(customer.name);
        $('#customer-phone').val(customer.phone);
        $('#customer-email').val(customer.email);
        $('#customer-nic').val(customer.nic);

        // Set edit mode
        editCustomerId = id;

        // Change button text to indicate edit mode
        $('.btn-success').text('Update Customer');
    } else {
        alert("Customer not found!");
    }
}

const updateCustomerData = (id) => {
    // Find the customer index
    const index = customerArr.findIndex(customer => customer.nic === id);

    if (index !== -1) {
        // Update customer data
        customerArr[index].name = $('#customer-name').val().trim();
        customerArr[index].phone = $('#customer-phone').val().trim();
        customerArr[index].email = $('#customer-email').val().trim();
        customerArr[index].nic = $('#customer-nic').val().trim();

        alert("Customer updated successfully!");
        clearCustomerForm();
        loadCustomers();
    } else {
        alert("Customer not found!");
    }
}

const deleteCustomer = (id) => {
    if (confirm("Are you sure you want to delete this customer?")) {
        const index = customerArr.findIndex(customer => customer.nic === id);

        if (index !== -1) {
            customerArr.splice(index, 1);
            alert("Customer deleted successfully!");

            // If we're editing this customer, clear the form
            if (editCustomerId === id) {
                clearCustomerForm();
            }

            loadCustomers();
        } else {
            alert("Customer not found!");
        }
    }
}

const loadCustomers = () => {
    let tBody = $('#t-body');
    tBody.empty(); // Clear existing table data

    $.each(customerArr, function(i, item) {
        let row = $('<tr>');
        let colName = $('<td>').text(item.name);
        let colPhone = $('<td>').text(item.phone);
        let colEmail = $('<td>').text(item.email);
        let colNic = $('<td>').text(item.nic);
        let colActions = $('<td>');

        // Add edit and delete buttons
        let editBtn = $('<button>').text('Edit').addClass('btn btn-sm btn-warning mx-1')
            .on('click', function() { updateCustomer(item.nic); });
        let deleteBtn = $('<button>').text('Delete').addClass('btn btn-sm btn-danger mx-1')
            .on('click', function() { deleteCustomer(item.nic); });

        colActions.append(editBtn, deleteBtn);
        row.append(colName, colPhone, colEmail, colNic, colActions);
        tBody.append(row);
    });
}

// Initialize the application
$(document).ready(function() {
    // Check if bcrypt is available
    if (!isBcryptAvailable) {
        console.warn("Bcrypt library not detected! Password storage will be insecure.");
    }

    // Initially show login form and hide register form and customer management
    $('#register-context').hide();
    $('#customer-management').hide();

    // Add some test data

    userArr.push(new User(
        "Test User",
        "test@example.com",
        "$2a$10$CwTycUXWue0Thq9StjUM0uQxTmxV.ZazGBJXvxLgVORtelPQvAj8."  // password: "password"
    ));
    console.log("Test user added:", userArr[0]);

});