document.addEventListener("DOMContentLoaded", () => {
    const textInput = document.getElementById("textInput");
    const algorithmSelect = document.getElementById("algorithmSelect");
    const hashOutput = document.getElementById("hashOutput");
    const visualizerSteps = document.getElementById("visualizerSteps");

    async function generateHash() {
        const text = textInput.value;
        const algorithm = algorithmSelect.value;
        if (!text) return alert("Please enter text!");

        let hashedValue;
        if (algorithm === "SHA-256") {
            hashedValue = await sha256(text);
        } else if (algorithm === "MD5") {
            hashedValue = md5(text);
        }

        hashOutput.textContent = hashedValue;
        visualizeHashing(text);
    }

    async function sha256(text) {
        const encoder = new TextEncoder();
        const data = encoder.encode(text);
        const hashBuffer = await crypto.subtle.digest("SHA-256", data);
        return Array.from(new Uint8Array(hashBuffer))
            .map(b => b.toString(16).padStart(2, "0"))
            .join("");
    }

    function md5(text) {
        return CryptoJS.MD5(text).toString();
    }

    function visualizeHashing(text) {
        visualizerSteps.innerHTML = "";
        text.split("").forEach((char, index) => {
            const stepElement = document.createElement("div");
            stepElement.className = "step";
            stepElement.textContent = `${char} → ${char.charCodeAt(0).toString(16)}`;
            visualizerSteps.appendChild(stepElement);
        });
    }

    window.generateHash = generateHash;
});
