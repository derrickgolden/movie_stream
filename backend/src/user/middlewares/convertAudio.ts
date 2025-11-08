// import { NextFunction, Request, Response } from "express";

// import ffmpeg from 'fluent-ffmpeg';

// // Manually set FFmpeg and FFprobe paths
// ffmpeg.setFfmpegPath("C:/ffmpeg/ffmpeg-2025-03-13-git-958c46800e-full_build/ffmpeg-2025-03-13-git-958c46800e-full_build/bin/ffmpeg.exe");
// ffmpeg.setFfprobePath("C:/ffmpeg/ffmpeg-2025-03-13-git-958c46800e-full_build/ffmpeg-2025-03-13-git-958c46800e-full_build/bin/ffprobe.exe");

// // Convert from 5.1 to Stereo
// export const convertToStereo = async(req: Request, res: Response, next: NextFunction) => {
//     const body = req.body;
//     const {url} = body;
//     // console.log(body);

//     const inputFile = url;
//     const outputFile = 'Billions.S001E003.mp4';
//     try {
//         ffmpeg(inputFile)
//         .audioCodec("aac")  // Use AAC audio codec
//         .audioChannels(2)    // Convert 5.1 to Stereo (2.0)
//         .audioBitrate("192k") // Set audio bitrate
//         .videoCodec("copy")  // Keep video quality
//         .output(outputFile)
//         .on("end", () => next())
//         .on("error", (err: any) => console.error("Error:", err))
//         .run();
    
           
//         } catch (error) {
//             console.error('Error:', error.message);
//             res.status(500).json({
//                 success: false,
//                 msg: "error while converting",
//                 details: [],
//             });
//         }
//     };

