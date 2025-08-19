return items.map(item => {
  const videoLink = item.json["Video Link"];
  const match = videoLink.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
  const videoId = match ? match[1] : null;
  return {
    json: {
      "Video Link": videoLink,
      "video_id": videoId
    }
  };
});
