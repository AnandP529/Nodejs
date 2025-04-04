import * as express from "express";
import * as bodyparser from "body-parser";
import * as cors from "cors";
import * as mongoose from "mongoose";

// Create the Express app
const app = express();

// Enable CORS
app.use(cors());

// Set JSON as MIME type
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose.connect(
    "mongodb+srv://Anand:Anand%403498@cluster0.izcxmsa.mongodb.net/Nodejs?retryWrites=true&w=majority"
  )
  
.then(() => console.log("MongoDB connected successfully"))
.catch(err => console.error("MongoDB connection error:", err));

// Define the schema
const employeeSchema = new mongoose.Schema({
  e_id: Number,
  e_name: String,
  e_sal: Number
});

// Create the model (fixed the incorrect `Model` usage)
const Employee = mongoose.model("Employee", employeeSchema);

// Create the REST API
app.post("/employee", async (req, res) => {
  try {
    const newRecord = new Employee({
      e_id: req.body.e_id,
      e_name: req.body.e_name,
      e_sal: req.body.e_sal
    });

    await newRecord.save();
    res.status(200).json({ insert: "success" });
  } catch (err) {
    console.error("Error inserting data:", err);
    res.status(500).json({ error: "Failed to insert data" });
  }
});

app.get("/allEmployees",(req,res)=>{
    Employee.find({},(err,docs)=>{
        if(err)throw err;
        else{
            res.send(docs);
        }
    });
});
// Assign the port number
app.listen(8080, () => {
  console.log("Server started successfully on port 8080");
});
