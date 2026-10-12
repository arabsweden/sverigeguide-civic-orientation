import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "10mb" }));

// Helper for Gemini AI client initialization
function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    return null;
  }
  return new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// API Health Check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "SverigeGuide API" });
});

// AI Civic Assistant Endpoint
app.post("/api/ai-assistant", async (req, res) => {
  try {
    const { question, language = "ar", categoryContext } = req.body;

    if (!question || typeof question !== "string" || question.trim().length === 0) {
      return res.status(400).json({ error: "Question is required." });
    }

    const ai = getGeminiClient();

    if (!ai) {
      // Fallback structured response if key is missing or default
      return res.json({
        summary: language === "ar" 
          ? "توجيهات عامة حول النظام السويدي للحصول على معلومات دقيقة وموثوقة."
          : language === "sv"
          ? "Allmän vägledning om det svenska systemet."
          : "General guidance regarding Swedish civic processes.",
        detailedAnswer: language === "ar"
          ? `بناءً على سؤالك حول "${question}":\n1. يرجى زيارة الموقع الرسمي للهيئة المعنية (مثل Migrationsverket أو Skatteverket أو Arbetsförmedlingen).\n2. تأكد دائماً من مراجعة القوانين الصادرة لعام 2026 للحصول على أحدث المستجدات.\n3. يمكنك التواصل مع بلدية سكنك لحجز موعد مع موجه إرشاد اجتماعي.`
          : language === "sv"
          ? `Baserat på din fråga gällande "${question}":\n1. Besök den officiella myndighetens webbplats (t.ex. Skatteverket, Migrationsverket, Arbetsförmedlingen).\n2. Kontrollera alltid gällande lagstiftning.\n3. Kontakta din hemkommun för vägledning.`
          : `Based on your question about "${question}":\n1. Visit the relevant official agency website (e.g. Migrationsverket, Skatteverket, Arbetsförmedlingen).\n2. Verify the latest 2026 legal guidelines.\n3. Reach out to your local municipality for civic orientation guidance.`,
        practicalTip: language === "ar"
          ? "نصيحة عملية: احتفظ دائماً برقم التنسيق (Samordningsnummer) أو الرقم الشخصي (Personnummer) والمستندات الرسمية جاهزة عند مراجعة الدوائر الحكومية."
          : language === "sv"
          ? "Praktiskt tips: Ha alltid ditt personnummer eller samordningsnummer till hands vid myndighetskontakter."
          : "Practical Tip: Always have your Personnummer or Samordningsnummer ready when contacting authorities.",
        officialSources: [
          { name: "Migrationsverket (Swedish Migration Agency)", url: "https://www.migrationsverket.se" },
          { name: "Skatteverket (Swedish Tax Agency)", url: "https://www.skatteverket.se" },
          { name: "Arbetsförmedlingen (Public Employment Service)", url: "https://arbetsformedlingen.se" },
          { name: "Informationsverige.se (Guide to Swedish Society)", url: "https://www.informationsverige.se" }
        ],
        relatedCategory: categoryContext || "Samhällsorientering",
        disclaimer: language === "ar"
          ? "تنبيه: هذه المعلومات للأغراض التثقيفية والإرشادية فقط. لا تعد بديلاً عن الاستشارة القانونية الرسمية من السلطات السويدية."
          : language === "sv"
          ? "Observera: Denna information är endast vägledande och ersätter inte juridisk rådgivning från svenska myndigheter."
          : "Disclaimer: This information is for educational guidance only and does not replace official legal advice from Swedish authorities.",
        createdAt: new Date().toISOString()
      });
    }

    const systemInstruction = `You are SverigeGuide AI, an expert, empathetic, and highly accurate Swedish Civic Orientation & Integration Assistant.
Your goal is to provide precise, official, and newcomer-friendly guidance on living, working, studying, and navigating bureaucracy in Sweden (including Skatteverket, Migrationsverket, Arbetsförmedlingen, Försäkringskassan, SFI, Socialstyrelsen, Housing queues, etc.).

Respond in the language specified: '${language}' ('ar' for Arabic, 'sv' for Swedish, 'en' for English).
If language is 'ar', write fluent, clear Arabic with standard terminology in parentheses for Swedish official terms (e.g., الرقم الشخصي (Personnummer), مصلحة الضرائب (Skatteverket)).

Return valid JSON with the following structure:
{
  "summary": "Short 1-2 sentence overview in target language",
  "detailedAnswer": "Comprehensive step-by-step guidance in target language with bullet points and clear sections",
  "practicalTip": "Practical actionable tip or pro-tip for newcomers",
  "officialSources": [
    { "name": "Official Agency Name", "url": "https://..." }
  ],
  "relatedCategory": "Main civic category (e.g. Housing, Employment, Taxation, Healthcare, SFI & Education, Rights & Laws)",
  "disclaimer": "Disclaimer statement regarding legal advice"
}`;

    const prompt = `User Question: "${question}"
Category Context: ${categoryContext || "General Civic Guidance"}
Target Language: ${language}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING },
            detailedAnswer: { type: Type.STRING },
            practicalTip: { type: Type.STRING },
            officialSources: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  url: { type: Type.STRING }
                },
                required: ["name", "url"]
              }
            },
            relatedCategory: { type: Type.STRING },
            disclaimer: { type: Type.STRING }
          },
          required: ["summary", "detailedAnswer", "officialSources", "disclaimer"]
        }
      }
    });

    if (response.text) {
      const parsed = JSON.parse(response.text);
      return res.json({
        ...parsed,
        createdAt: new Date().toISOString()
      });
    } else {
      throw new Error("Empty response from Gemini API");
    }
  } catch (error: any) {
    console.error("Error in AI Assistant API:", error);
    res.status(500).json({
      error: "Failed to generate AI civic guidance.",
      details: error.message
    });
  }
});

// Express & Vite integration
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
