export interface MessageType {
  role: "user" | "assistant" | "system";
  content: string;
}

export interface Choice {
  index: number;
  message: Message;
  logprobs: null;
  finish_reason: string;
}

export interface Usage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
}

export interface ChatCompletion {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Choice[];
  usage: Usage;
  system_fingerprint: null;
}

export interface PayloadCreateMessage {
  model: string;
  messages: Message[];
}
