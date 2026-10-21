const $ = (id) => document.getElementById(id);
$("year").textContent = new Date().getFullYear();
$("menuBtn").addEventListener("click", () => $("nav").classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(a => a.addEventListener("click", () => $("nav").classList.remove("open")));

const form = $("chatForm"), input = $("question"), messages = $("messages");
function addMessage(text, type, html = false) {
  const div = document.createElement("div");
  div.className = "message " + type;
  if (html) div.innerHTML = text; else div.textContent = text;
  messages.appendChild(div); messages.scrollTop = messages.scrollHeight;
}
function safeQuery(q) { return encodeURIComponent(q); }
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const q = input.value.trim();
  if (!q) return;
  addMessage(q, "user");
  input.value = "";
  const encoded = safeQuery(q + " geomorphology");
  const w = "https://en.wikipedia.org/w/index.php?search=" + encoded;
  const s = "https://www.semanticscholar.org/search?q=" + encoded;
  const c = "https://search.crossref.org/?q=" + encoded;
  const html = "This starter version can find research starting points, but it does not yet generate an AI-written answer. For your question, try these source searches:<br><br>" +
    "• <a href=\"" + w + "\" target=\"_blank\" rel=\"noopener\">Search Wikipedia ↗</a><br>" +
    "• <a href=\"" + s + "\" target=\"_blank\" rel=\"noopener\">Search Semantic Scholar ↗</a><br>" +
    "• <a href=\"" + c + "\" target=\"_blank\" rel=\"noopener\">Search Crossref publications ↗</a><br><br>" +
    "When we connect a secure backend and AI provider, this chatbot can retrieve source material and compose a cited explanation. Please verify claims against the original sources.";
  addMessage(html, "bot", true);
});
