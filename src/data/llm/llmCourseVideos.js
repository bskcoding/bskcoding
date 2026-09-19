// LLM Fundamentals Full Course — Comprehensive AI & LLM Training
// Each entry: title, description, category, videoLink (YouTube)
export const llmCourseVideos = [
  // ========================
  // Section 1: Core Concepts
  // ========================
  {
    title: "LLM Fundamentals - What Are Large Language Models?",
    description:
      "Large Language Models (LLMs) are neural networks trained on massive text corpora that can understand and generate human-like text. This lesson covers the core idea: how LLMs learn patterns from data, tokenize text into tokens, and use that knowledge to predict the next word (or token) in a sequence. You'll learn the difference between traditional NLP rule-based systems and modern statistical deep-learning approaches, why 'large' matters (scale of parameters and data), and the emergent abilities that appear only at scale. We'll also discuss the basic architecture of a transformer encoder-decoder stack and why LLMs excel at tasks like translation, summarization, question-answering, and code generation.",
    category: "Core Concepts",
    videoLink: "https://www.youtube.com/watch?v=4j7dK3q4tW0",
  },
  {
    title: "Transformer Architecture - The Engine Behind LLMs",
    description:
      "The Transformer architecture, introduced in the 2017 paper 'Attention Is All You Need', is the foundation of all modern LLMs. This lesson breaks down the Transformer into its key components: the embedding layer that converts tokens into vectors, the encoder stack that processes input context, the decoder stack that generates output, and the positional encoding that gives the model a sense of word order. You'll learn how self-attention works — how each token attends to every other token to build contextual representations — and why this parallelizable architecture replaced the slower sequential approach of RNNs and LSTMs. We'll cover encoder-only (BERT-style), decoder-only (GPT-style), and encoder-decoder (T5-style) variants.",
    category: "Core Concepts",
    videoLink: "https://www.youtube.com/watch?v=rBCxY0Yjg5w",
  },
  {
    title: "Attention Mechanism - How Models Focus on Context",
    description:
      "The attention mechanism is what allows Transformers to understand which words are relevant to others in a sentence. In this lesson, we dive deep into self-attention: how query, key, and value vectors are computed from token embeddings, how attention scores are calculated using dot products, and how softmax turns those scores into a weighted sum. You'll understand multi-head attention — running several attention heads in parallel to capture different types of relationships (e.g., syntactic vs semantic) — and how the outputs are concatenated and projected back to the model dimension. Real examples show attention weights in action, such as 'it' resolving to 'the animal' in a long sentence.",
    category: "Core Concepts",
    videoLink: "https://www.youtube.com/watch?v=wQ8nZ3I7V5k",
  },
  {
    title: "KV Cache - Speeding Up LLM Generation",
    description:
      "KV Cache (Key-Value Cache) is a critical optimization that makes LLM inference practical. During text generation, each new token requires attending to all previous tokens, which would normally mean recomputing key and value vectors for every prior token at every step. The KV Cache stores these key and value matrices from previous layers so they are computed only once and reused. This reduces the time complexity of generation from O(n^2) to O(n) for n tokens, dramatically speeding up autoregressive text generation. This lesson covers how the cache grows with sequence length, its memory implications (especially for long conversations), and how it relates to context window limitations.",
    category: "Core Concepts",
    videoLink: "https://www.youtube.com/watch?v=gVJK0B1gZ7U",
  },
  {
    title: "Mixture of Experts (MoE) - Scaling LLMs Efficiently",
    description:
      "Mixture of Experts (MoE) is a technique that allows training much larger models without proportionally increasing compute costs. Instead of activating all parameters for every input, MoE uses a router to select only a few specialized 'expert' sub-networks for each token. This means a model with billions of parameters might only compute on a fraction of them per forward pass, enabling training of trillions-parameter models efficiently. This lesson explains how the routing mechanism works, the trade-offs between MoE and dense models (training speed vs inference complexity), and how major models like Mixtral, GLaM, and Switch Transformer use this approach to achieve high performance at lower cost.",
            category: "Core Concepts",
    videoLink: "https://www.youtube.com/watch?v=RZFI4r0yZ_k",
  },

  // ===========================
  // Section 2: Reasoning Models
  // ===========================
  {
    title: "Reasoning Models - Chain-of-Thought and Beyond",
    description:
      "Traditional LLMs often struggle with multi-step reasoning tasks like math word problems or logical puzzles. Reasoning models take a different approach: instead of outputting a final answer immediately, they produce intermediate 'thinking' steps (chain-of-thought) that break down the problem. This lesson covers chain-of-thought prompting, tree-of-thought search, and how models like OpenAI o1 are trained with reinforcement learning to explicitly reason through problems. You'll learn the difference between 'System 1' (fast, intuitive) and 'System 2' (slow, deliberate) thinking modes, and why reasoning models can solve problems that standard LLMs fail at.",
    category: "Reasoning Models",
    videoLink: "https://www.youtube.com/watch?v=6pBOcpLLLEw",
  },
  {
    title: "OpenAI o1 - The First Consumer Reasoning Model",
    description:
      "OpenAI o1 is a series of models specifically designed for complex reasoning. Unlike GPT-4, which generates answers quickly, o1 uses an internal 'reasoning' phase where it thinks through a problem step by step before presenting the final response. This lesson covers how o1 was trained using reinforcement learning with a rewards model that grades intermediate reasoning steps, its performance on benchmarks like AIME and Codeforces (where it reaches PhD-level math and competitive programming performance), and practical guidance on when to use o1 versus standard GPT-4 for coding, math, and logic tasks.",
    category: "Reasoning Models",
    videoLink: "https://www.youtube.com/watch?v=NFTfE2LUrcg",
  },
  {
    title: "Claude Extended Thinking - Reasoning at the Edge",
    description:
      "Claude 3.7 Sonnet introduced 'extended thinking' — a mode where the model pauses to reason through complex problems internally before responding. This is Anthropic's approach to reasoning models, activated by a simple parameter toggle. This lesson explains how extended thinking works (the model generates thinking tokens that are not exposed to the user by default), its strengths in multi-step reasoning, coding, and creative tasks, and how it compares to OpenAI o1. You'll also learn the token budget constraints and how to enable 'thinking' mode in the Claude API.",
    category: "Reasoning Models",
        videoLink: "https://www.youtube.com/watch?v=QF_9Ob9PKj8",
  },

  // ==================================================
  // Section 3: AI Assistants & Their Strengths
  // ==================================================
  {
    title: "ChatGPT - The General-Purpose AI Assistant",
    description:
      "ChatGPT (from OpenAI) pioneered the consumer-facing conversational AI experience. Built on the GPT architecture, it excels at natural conversation, writing assistance, language translation, and creative tasks. This lesson explores ChatGPT's strengths: its conversational flow, personality customization, internet browsing (with ChatGPT Plus and browsing plugin), file upload capabilities, and the vast plugin ecosystem. We'll cover when to use ChatGPT (general purpose, creative writing, brainstorming) versus when to reach for more specialized tools, and its limitations including training data cutoffs and occasional factual errors.",
    category: "AI Assistants",
    videoLink: "https://www.youtube.com/watch?v=T5S7K3m7w2g",
  },
  {
    title: "Claude - The Document-First AI with Massive Context",
    description:
      "Claude (from Anthropic) focuses on safety, helpfulness, and handling long documents. With a massive context window (up to 200K tokens in Claude 3, 1M+ tokens in Claude 3.5), Claude excels at reading and summarizing entire books, codebases, or research papers in a single conversation. This lesson covers Claude's strengths: document analysis, long-form content processing, constitutional AI principles that make it more aligned and less prone to harmful outputs, and its extended thinking mode for complex reasoning. We'll discuss when Claude is the better choice over ChatGPT (long documents, safety-critical tasks).",
    category: "AI Assistants",
        videoLink: "https://www.youtube.com/watch?v=9wZ9cQ3h1q0",
  },
  {
    title: "GitHub Copilot - AI Pair Programmer",
    description:
      "GitHub Copilot (powered by OpenAI Codex) revolutionizes software development by providing AI-powered code autocompletion. As you type, Copilot suggests entire lines, functions, or even tests based on your code's context and language. This lesson covers how Copilot works (trained on billions of lines of public GitHub code), its strengths in boilerplate generation, repetitive coding patterns, and multi-language support (Python, JavaScript, Go, Rust, etc.). We'll discuss practical workflows like generating test cases, refactoring suggestions, and when Copilot shines vs. when you should write code manually. Also covers Copilot X, Copilot Chat, and integration with VS Code.",
    category: "AI Assistants",
    videoLink: "https://www.youtube.com/watch?v=11F9MiDCn0M",
  },
  {
    title: "Cursor - The AI-First Code Editor",
    description:
      "Cursor is a purpose-built AI-first code editor that integrates LLMs directly into the editing experience. Unlike traditional editors with AI plugins, Cursor is designed around AI interaction — you can ask it to edit code, explain functions, refactor across files, generate components from scratch, and even answer questions about your specific codebase. This lesson covers Cursor's key features: the Cmd+K inline edit, the chat sidebar with codebase awareness, multi-file refactoring, and its deep integration with Git. We'll compare Cursor vs VS Code + GitHub Copilot, and discuss when Cursor's codebase-wide understanding provides a significant productivity boost.",
    category: "AI Assistants",
        videoLink: "https://www.youtube.com/watch?v=F1c0hG8qF7w",
  },

  // ============================================
  // Section 4: No-Code AI Tools & Automation
  // ============================================
  {
    title: "No-Code AI Tools - Building Without Writing Code",
    description:
      "No-code AI tools let you leverage artificial intelligence without writing a single line of code. From design generation to website building, automation workflows to database creation, these tools democratize AI by wrapping powerful models behind intuitive interfaces. This lesson introduces the landscape of no-code AI tools and explains how they work — typically using GPT/LLM APIs under the hood, exposing them through drag-and-drop builders, form inputs, or natural language prompts. We'll cover the four key categories: AI website builders (Bolt, Lovable, V0), visual automation (n8n), prompt-to-product tools, and AI design assistants.",
    category: "No-Code AI Tools",
    videoLink: "https://www.youtube.com/watch?v=KxPvespZXQI",
  },
  {
    title: "Bolt - AI Full-Stack Web App Builder",
    description:
      "Bolt.new is a groundbreaking AI tool that generates complete, production-ready web applications from a single text prompt. Unlike template-based builders, Bolt generates real code (React, Node.js, Tailwind CSS, Supabase) that you can edit, deploy, and iterate on. This lesson covers how Bolt works: you describe your app, Bolt builds it and deploys it to the cloud, then you can chat with Bolt to refine features, fix bugs, or add new pages. We'll cover its key capabilities — full-stack generation, real-time preview, GitHub sync, and live deployment — and when Bolt is the right choice (rapid prototyping, MVPs, learning by example) versus when you'd build manually.",
    category: "No-Code AI Tools",
    videoLink: "https://www.youtube.com/watch?v=4aNiffF6hDA",
  },
  {
    title: "Lovable - AI-Powered Project Generator",
    description:
      "Lovable (formerly known as 'AI Project Generator') lets you build full-stack web apps by describing them in plain English. Built for developers and non-developers alike, Lovable generates React applications with real backend APIs, database schemas, and polished UI components. This lesson explains Lovable's workflow: describe your product in a prompt, Lovable scaffolds the project, provisions infrastructure, and launches a live preview. You can then iterate through chat to add features, modify UI, or connect databases. We'll cover Lovable's strengths (speed, real code output with Tailwind + Supabase), its integration with popular services, and practical use cases like landing pages, dashboards, and SaaS MVPs.",
    category: "No-Code AI Tools",
    videoLink: "https://www.youtube.com/watch?v=LOj6QLP7b3M",
  },
  {
    title: "v0 by Vercel - AI UI Component Generator",
    description:
      "v0 by Vercel is an AI tool that turns text descriptions into production-ready React/Next.js code with beautiful Tailwind CSS styling. Instead of prompting a chat model and copy-pasting code, v0 generates ready-to-use UI components that you can drop into your project. This lesson covers how v0 works: describe a UI (e.g., 'a pricing card with three tiers'), v0 generates the exact React component with Tailwind classes, and you can refine it through additional prompts or export it directly to GitHub. We'll explore v0's key workflows — generating components, creating full pages, styling consistency, and integrating with the Vercel/Next.js ecosystem — and when to use v0 versus manual development.",
    category: "No-Code AI Tools",
    videoLink: "https://www.youtube.com/watch?v=SlIFyV8H-gY",
  },
  {
    title: "n8n - AI-Powered Workflow Automation",
    description:
      "n8n (pronounced 'n8n' or 'ninja') is an open-source workflow automation tool that connects apps and services through visual, drag-and-drop workflows. With built-in AI integration, n8n can call OpenAI, Claude, Gemini, and other LLM APIs as part of automated workflows — enabling you to build AI-powered automations like auto-summarizing emails, generating reports from form data, or creating AI-driven chatbots. This lesson covers n8n's node-based interface, how to create workflows that combine traditional app integrations (Slack, Gmail, Notion, Airtable) with AI actions, hosting options (self-hosted or cloud), and real-world examples like automated customer support, content generation pipelines, and data processing automations.",
    category: "No-Code AI Tools",
    videoLink: "https://www.youtube.com/watch?v=8f3kH5D3q3k",
  },
];