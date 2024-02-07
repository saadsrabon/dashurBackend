import { Model, Schema,model } from "mongoose";
import { IResume } from "./resume.interface";

// 
type resumeModel =Model<IResume ,object>
const ResumeSchema = new Schema<IResume>({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    pdf: {
        type: String,
        required: true,
    },
    
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });

// 
export const Resume =model<IResume,resumeModel>("Resume", ResumeSchema);