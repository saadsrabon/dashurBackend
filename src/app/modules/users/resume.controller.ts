import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import httpStatus from "http-status";
import { ResumeService } from "./resume.service";
import { sendSuccessResponse } from "../../../shared/customResponse";
import { IResume } from "./resume.interface";

const createResumeController = catchAsync(
    async (req: Request, res: Response) => {
        const { resume } = req.body;
        const result = await ResumeService.createResume( resume);
    
        sendSuccessResponse<IResume>(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Resume created successfully!",
        data: result,
        });
    }
    );

export const ResumeController = {
    createResumeController,
};