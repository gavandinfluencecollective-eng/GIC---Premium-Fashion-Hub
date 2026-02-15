
import { GoogleGenAI } from "@google/genai";

export const getStylistResponse = async (userInput: string) => {
  // Initialize AI client using the required naming and direct environment variable access
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `You are the GIC AI Fashion Stylist. You are helpful, chic, and high-end. 
  Answer the following fashion-related query concisely and elegantly: "${userInput}". 
  Focus on minimal, luxury trends and offer specific styling advice if asked.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are a professional luxury fashion consultant for the brand GIC. Your tone is helpful, minimal, and sophisticated.",
        temperature: 0.7,
      },
    });
    
    // Direct property access as specified in the GenerateContentResponse guidelines
    return response.text;
  } catch (error) {
    console.error("Gemini Stylist Error:", error);
    return "I apologize, my creative senses are momentarily clouded. Please try again in a moment.";
  }
};
