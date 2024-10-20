// src/jobsHandler.js
import fetch from 'node-fetch';
import civitai from './civitaiClient.js';
import fs from 'fs';
import path from 'path';
import { saveFile } from './utils.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Define __dirname and __filename for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function checkJobStatus(token, outputType = 'image') {
  try {
    let jobComplete = false;
    while (!jobComplete) {
      const output = await civitai.jobs.getByToken(token);
      const job = output.jobs[0];
      console.log(`Checking job status... Cost: ${job.cost}`);

      if (job.result.available) {
        jobComplete = true;
        const blobUrl = job.result.blobUrl;
        console.log('Job complete! Downloading...');

        const response = await fetch(blobUrl);
        
        // Replace response.buffer() with response.arrayBuffer()
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const extension = outputType === 'video' ? '.mp4' : '.jpg';
        const fileName = `output${extension}`;
        
        // Define the output directory (e.g., 'outputs' folder in the project root)
        const outputDir = path.join(__dirname, '../outputs');
        
        // Ensure the output directory exists
        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir, { recursive: true });
        }

        const filePath = path.join(outputDir, fileName);

        saveFile(buffer, filePath);
        console.log(`File saved as ${filePath}`);
      } else if (job.scheduled) {
        console.log('Job is still scheduled, waiting...');
        await new Promise((resolve) => setTimeout(resolve, 5000));
      } else {
        console.error('Job failed or is not progressing.');
        break;
      }
    }
  } catch (error) {
    console.error('Error checking job status:', error.message);
    console.error(
      'Error details:',
      error.response ? error.response.data : error
    );
  }
}

async function createJob(input, outputType = 'image') {
  try {
    console.log('Creating generation job...');
    let response;
    if (outputType === 'video') {
      response = await civitai.video.fromText(input);
    } else {
      response = await civitai.image.fromText(input);
    }
    const token = response.token;
    console.log('Generation job created. Token:', token);

    await checkJobStatus(token, outputType);
  } catch (error) {
    console.error('Error creating generation job:', error.message);
    console.error(
      'Error details:',
      error.response ? error.response.data : error
    );
  }
}

export { createJob };
