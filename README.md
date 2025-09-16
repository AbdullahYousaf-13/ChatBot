# ChatBot

## Installation

**Install Ollama**    
Download and install Ollama from here: [Ollama](https://ollama.com/download)    
After installing, Ollama runs as a background service.    

**Open Your Terminal**    
Depending on your OS:    
Windows: Open Command Prompt or PowerShell    
Linux/macOS: Open your Terminal    

**Pull a Model**    

    ollama pull smollm:1.7b
This downloads the model to your PC. First time will take some time depending on your internet speed.

**Run the Model**    

    ollama run smollm:1.7b
This will start the chatbot session. You can now type messages and it will reply.

**Exit the Chat**    
Type `Ctrl + C` to exit the running session.

## To Start Interface

**Start Ollama service**

    ollama serve

**Run your Node server**
    
    node server.js
→ you’ll see Server running at http://localhost:3000

Open it in your browser.

Type a message → you should see responses from smollm:1.7b
