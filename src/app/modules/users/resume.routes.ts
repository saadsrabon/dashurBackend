 import  express  from 'express';
import { ResumeController } from './resume.controller';
 const router =express.Router();


router.post('/create-resume', ResumeController.createResumeController );