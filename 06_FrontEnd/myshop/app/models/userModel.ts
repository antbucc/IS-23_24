import mongoose from "mongoose";

export const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true
        },
        deliveryAddresses: {
            type: Array,
            default: [],
            required: false,
        },
        isActive: {
            type: Boolean,
            default: true,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
            required: false,
        },

    },
    {
        timestamps: true,
    }
);

// if the model is already defined, use that model else create a new one
export default mongoose.models["Users"] || mongoose.model("users", userSchema);
