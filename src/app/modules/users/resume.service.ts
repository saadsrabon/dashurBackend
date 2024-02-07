import ApiError from "../../../errors/ApiError";
import { IResume } from "./resume.interface";
import { Resume } from "./resume.model";

const createResume = async (resume: IResume) => {
    const createdResume = await Resume.create(resume);
    if (!createdResume) {
        throw new ApiError(400, 'Failed to create');
    }
    return createdResume;
}


export const ResumeService = {
    createResume,
};