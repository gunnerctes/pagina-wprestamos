
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Eres el asistente virtual de "W PRESTAMOS". Tu nombre es "W-Bot".
W PRESTAMOS es un negocio que ofrece préstamos de dinero rápido en efectivo o vía transferencia.
Aspecto clave: El negocio se basa en el modelo de GARANTÍA PRENDARIA (Empeño). El cliente deja un objeto de valor (oro, joyas, electrónica, vehículos, herramientas) como garantía para recibir el dinero.
Resalta que esta garantía asegura que el préstamo sea aprobado de inmediato sin chequear historial crediticio.
Tu tono debe ser profesional, confiable, amable y resolutivo. Hablas español.
Información de contacto: Av. Principal 1234. Tel: +54 11 4444-5555. 
No inventes tasas de interés específicas si no te preguntan, pero indica que son competitivas.
Si el usuario pregunta qué puede empeñar, menciona: Oro, Celulares, Laptops, Herramientas, Autos, Motos, Relojes.
`;

export async function getChatResponse(userMessage: string, history: { role: string, content: string }[]) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "Lo siento, tuve un pequeño problema. ¿Podrías repetir tu pregunta?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "En este momento estoy experimentando dificultades técnicas. Por favor, intenta de nuevo más tarde o llámanos directamente.";
  }
}
