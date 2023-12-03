import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

// Provide optimal infrastructure for our API route (https://edge-runtime.vercel.app/)
export const runtime = 'edge'; 

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(config);

export async function POST(request: Request) {
    const { messages } = await request.json(); 

    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        stream: true,
        messages: [
            { role: "system", content: "You are a helpful assistant. You explain software concepts simply to intermediate programmers."},
            ...messages
        ]
    })

    const stream = await OpenAIStream(response);

    return new StreamingTextResponse(stream);
}