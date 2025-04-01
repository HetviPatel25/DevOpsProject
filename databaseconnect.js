// Connect to MongoDB
const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db("MedicalApp");
        
        // Users Collection
        const usersCollection = db.collection("users");
        const appointmentsCollection = db.collection("appointments");
        const emergencyCollection = db.collection("emergency");
        const contactsCollection = db.collection("contacts");

        // Insert Sample Users
        await usersCollection.insertOne({
            UserID: "U001",
            Username: "john_doe",
            Password: "hashed_password",
            Email: "john.doe@example.com",
            PhoneNumber: "1234567890",
            Address: "123 Main St, NY"
        });

        // Insert Sample Appointment
        await appointmentsCollection.insertOne({
            AppointmentID: "A001",
            UserID: "U001",
            Date: "2025-04-10",
            Time: "10:30 AM",
            Status: "Confirmed"
        });

        // Insert Sample Emergency Report
        await emergencyCollection.insertOne({
            EmergencyID: "E001",
            UserID: "U001",
            Location: "456 Elm St, NY",
            Contact: "911"
        });

        // Insert Sample Contact
        await contactsCollection.insertOne({
            ContactID: "C001",
            UserID: "U001",
            Name: "Jane Doe",
            PhoneNumber: "9876543210",
            Email: "jane.doe@example.com"
        });

        console.log("Sample data inserted successfully");
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

run().catch(console.dir);
