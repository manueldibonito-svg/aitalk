const chatBox = document.getElementById("chat-box");

function addMessage(content, sender) {
    const div = document.createElement("div");
    div.className = `message ${sender}`;
    div.innerText = content;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

async function sendMessage() {
    const input = document.getElementById("user-input");
    const text = input.value.trim();
    if (!text) return;

    addMessage(text, "user");
    input.value = "";

    const response = await fetch("https://TUO-BACKEND.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            message: text
        })
    });

    const data = await response.json();
    addMessage(data.reply, "bot");
}

