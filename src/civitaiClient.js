// src/civitaiClient.js
import pkg from 'civitai';
import { civitaiConfig } from './config.js';

const { Civitai } = pkg;
const civitaiInstance = new Civitai(civitaiConfig);

export default civitaiInstance;
