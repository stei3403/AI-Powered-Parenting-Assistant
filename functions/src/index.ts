import { onCall } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import * as functions from "firebase-functions";
import admin from "firebase-admin";
import OpenAI from "openai";

admin.initializeApp();

const openaiApiKey = defineSecret("OPENAI_API_KEY");

export const getParentingAdvice = onCall({ secrets: [openaiApiKey] }, async (req) => {
  const question = req.data?.question;

  if (!question) {
    throw new functions.https.HttpsError("invalid-argument", "Question is required");
  }

  const openai = new OpenAI({
    apiKey: openaiApiKey.value(),
  });

  const systemPrompt = `
You are an expert parenting coach. Use principles from professionals like Dr. Becky Kennedy, Janet Lansbury, and Dr. Laura Markham.
Always back your advice with developmental psychology and expert-sourced strategies.
Answer in a friendly, non-judgmental tone and offer actionable steps for the parent.
`;

  const chatResponse = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: question }
    ],
    temperature: 0.7,
    max_tokens: 500
  });

  const usage = chatResponse.usage;
  const promptTokens = usage?.prompt_tokens ?? 0;
  const completionTokens = usage?.completion_tokens ?? 0;
  const totalTokens = usage?.total_tokens ?? 0;

  const model = chatResponse.model;
  let costPer1K = 0;

  if (model.startsWith("gpt-4")) {
    costPer1K = 0.01;
  } else if (model.startsWith("gpt-3.5")) {
    costPer1K = 0.001;
  }

  const costEstimate = (totalTokens / 1000) * costPer1K;

  console.log(`[Token usage] Prompt: ${promptTokens}, Completion: ${completionTokens}, Total: ${totalTokens}`);
  console.log(`[Estimated cost] ~$${costEstimate.toFixed(4)}`);

  return {
    answer: chatResponse.choices[0].message?.content ?? "No response from OpenAI.",
    usage: {
      promptTokens,
      completionTokens,
      totalTokens,
      estimatedCost: costEstimate
    }
  };
});
