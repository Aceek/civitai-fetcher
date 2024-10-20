// src/config.js
import 'dotenv/config';
import { Scheduler } from 'civitai';

export const civitaiConfig = {
  auth: process.env.CIVITAI_API_KEY,
};

export const defaultInput = {
  model: 'urn:air:sd1:checkpoint:civitai:4201@130072', // Default model
  params: {
    prompt: 'Your default prompt here',
    negativePrompt: 'Your default negative prompt here',
    scheduler: Scheduler.EULER_A,
    steps: 20,
    cfgScale: 7,
    width: 512,
    height: 512,
    clipSkip: 2,
  },
};
