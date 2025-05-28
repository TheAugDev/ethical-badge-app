export async function callGeminiAPI(prompt) {
  let chatHistory = [{ role: 'user', parts: [{ text: prompt }] }];
  const payload = { contents: chatHistory };
  const apiKey = ''; // This will be provided by the Canvas environment at runtime
  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      const errorData = await response.json();
      console.error('Gemini API Error:', errorData);
      return `Error: ${errorData.error?.message || response.statusText}. Please check console for details.`;
    }
    const result = await response.json();
    if (
      result.candidates &&
      result.candidates.length > 0 &&
      result.candidates[0].content &&
      result.candidates[0].content.parts &&
      result.candidates[0].content.parts.length > 0
    ) {
      let text = result.candidates[0].content.parts[0].text;
      // Basic Markdown to HTML conversion
      text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); // Bold
      text = text.replace(/\*(.*?)\*/g, '<em>$1</em>'); // Italics
      // Handle lists more robustly
      text = text.replace(/^- (.*?)(\n|$)/gm, '<li>$1</li>'); // Unordered list items
      text = text.replace(/(<ul>\s*)?(<li>.*?<\/li>)+(\s*<\/ul>)?/gs, (match, p1, p2, p3) => {
        // If already wrapped in <ul>, keep it. Otherwise, wrap it.
        if (p1 && p3) return match;
        return '<ul>' + match.replace(/<\/?ul>/g, '') + '</ul>';
      });
      text = text.replace(/\n/g, '<br>'); // Newlines to <br>
      return text;
    } else {
      console.error('Gemini API Response Error: No valid content found', result);
      return 'AI analysis could not be retrieved at this time.';
    }
  } catch (error) {
    console.error('Fetch Error calling Gemini API:', error);
    return 'An error occurred while contacting the AI service. Please try again later.';
  }
}
