import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    publishedYear: {
        type: Number,
        required: true,
    },
    category: String,
    price: Number,
}, {
    id: false,
    timestamps: true,
    toJSON: {
        transform(_doc, ret) {
            delete ret._id;
            delete ret.__v;
        },
    },
});

bookSchema.pre("save", async function () {
    if (this.isNew) {
        const last = await mongoose.model("Book").findOne().sort({ id: -1 }).select("id");
        this.id = last ? last.id + 1 : 1;
    }
});

export const Book = mongoose.model('Book', bookSchema);
