// src/index.js
import { createJob } from './jobsHandler.js';
import { defaultInput } from './config.js';

// Modify defaultInput or create a new input object here
const input = {
  ...defaultInput,
  params: {
    ...defaultInput.params,
    prompt:
      'RAW photo, face portrait photo of 26 y.o woman, wearing black dress, happy face, hard shadows, cinematic shot, dramatic lighting',
    negativePrompt:
      '(deformed iris, deformed pupils, semi-realistic, cgi, 3d, render, sketch, cartoon, drawing, anime, mutated hands and fingers:1.4), (deformed, distorted, disfigured:1.3)',
  },
};

const outputType = 'image'; // Change to 'video' if needed

createJob(input, outputType);
