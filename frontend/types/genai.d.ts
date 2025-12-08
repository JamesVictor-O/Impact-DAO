declare module "@google/genai" {
  interface GoogleGenAIConfig {
    apiKey: string;
  }

  interface GenerateContentOptions {
    model: string;
    contents: any;
  }

  interface ChatConfig {
    model: string;
    config?: {
      systemInstruction?: string;
    };
    history?: any;
  }

  interface ChatInstance {
    sendMessage(input: any): Promise<{ text: string }>;
  }

  export class GoogleGenAI {
    constructor(config: GoogleGenAIConfig);

    models: {
      generateContent(
        options: GenerateContentOptions
      ): Promise<{ text?: string }>;
    };

    chats: {
      create(config: ChatConfig): ChatInstance;
    };
  }
}




