import mongoose from 'mongoose';

const ClientSchema = mongoose.Schema(
    {
      name: {
        type: String,
        required: [ true, "Client name is required" ],
      },
      
      company: {
        type: String, 
        required: [ true, "Company name is required" ],
      },

      email: {
        type: String, 
        required: [ true, "Email is required" ],
      },

      phone: {
        type: String, 
        required: [ true, "Phone is required" ],
      },

      status: {
        type: String, 
        enum: ['active', 'lead', 'inactive'],
        default: 'active',
      },

      priority: {
        type: String, 
        required: [ true, "Company name is required" ],
      },

      project: {
        type: String, 
        required: [ true, "Project name is required" ],
      },
      
    },
    {
        timestamps: true
    }
)

// Create a model to store data in MongoDB
const Client = mongoose.model("Client", ClientSchema);

export default Client;