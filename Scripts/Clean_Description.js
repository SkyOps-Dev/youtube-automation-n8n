return items.map(item => {
  const rawText = item.json.text;
  const cleanedText = rawText
    .replace(/\n/g, ' ')      // Replace all \n with space
    .replace(/\s+/g, ' ')     // Normalize multiple spaces to single space
    .trim();                  // Trim leading/trailing whitespace
  return {
    json: {
      cleanedText
    }
  };
});
