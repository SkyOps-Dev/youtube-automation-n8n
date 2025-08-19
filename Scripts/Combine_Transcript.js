const transcriptChunks = items[0]?.json?.data?.transcripts?.en_auto?.custom;

if (!Array.isArray(transcriptChunks)) {
  throw new Error("Transcript chunks not found or not in expected format.");
}
let combinedText = '';
for (const chunk of transcriptChunks) {
  if (chunk?.text) {
    combinedText += chunk.text.trim() + ' ';
  }
}
return [
  {
    json: {
      combinedTranscript: combinedText.trim()
    }
  }
];
