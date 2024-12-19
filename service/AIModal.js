// // const {
// //     GoogleGenerativeAI,
// //     HarmCategory,
// //     HarmBlockThreshold,
// //   } = require("@google/generative-ai");

// import { GoogleGenerativeAI } from "@google/generative-ai";

// const apiKey = import.meta.env.VITE_GOOGLE_AI_API_KEY;
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({
//   // model: "gemini-1.5-flash",
//   model: "gemini-2.0-flash-exp",
// });

// // const generationConfig = {
// //   temperature: 1,
// //   topP: 0.95,
// //   topK: 64,
// //   maxOutputTokens: 8192,
// //   responseMimeType: "application/json",
// // };

// generation_config = {
//   "temperature": 1,
//   "top_p": 0.95,
//   "top_k": 40,
//   "max_output_tokens": 8192,
//   "response_mime_type": "text/plain",
// }


// export const AIChatSession = model.startChat({
//   generation_Config,
//   // safetySettings: Adjust safety settings
//   // See https://ai.google.dev/gemini-api/docs/safety-settings
//   history: [
//   ],
// });




import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = { // Ensure consistent naming
  temperature: 1,
  top_p: 0.95,
  top_k: 40,
  max_output_tokens: 8192,
  response_mime_type: "application/json",
};

export const AIChatSession = model.startChat({
  generationConfig, // Use the corrected variable name
  history: [],
});
