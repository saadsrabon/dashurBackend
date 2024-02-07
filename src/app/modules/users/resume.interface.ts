import { Schema} from "mongoose";

export type IResume = {
    name: string;
    phone: string;
    email: string
    pdf: string;
    createdAt: Date;

}

// 