return items.map(item => {
  const raw = item.json.output;
  // Match titles like: 1. **...** up to 10. **
  const matches = raw.match(/\d+\.\s*\*\*.*?\*\*/g);
  return {
    json: {
      titles: matches || []  // Return empty array if nothing matched
    }
  };
});
