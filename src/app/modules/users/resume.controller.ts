import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import httpStatus from "http-status";
import { ResumeService } from "./resume.service";
import { sendSuccessResponse } from "../../../shared/customResponse";
import { IResume } from "./resume.interface";

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

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