// schema-video.js
// membuat VideoObject schema dari database

(function () {

  if (typeof videos === "undefined") {
    console.warn("video database tidak ditemukan");
    return;
  }

  const schemaData = [];

  videos.forEach(function(video){

    const schema = {
      "@context": "https://schema.org",
      "@type": "VideoObject",

      "name": video.title,

      "description": video.description || video.title,

      "thumbnailUrl": [
        "https://img.youtube.com/vi/" + video.youtubeId + "/maxresdefault.jpg"
      ],

      "uploadDate": video.uploadDate || "2024-01-01",

      "embedUrl": "https://www.youtube.com/embed/" + video.youtubeId,

      "contentUrl": "https://www.youtube.com/watch?v=" + video.youtubeId
    };

    schemaData.push(schema);

  });

  const script = document.createElement("script");

  script.type = "application/ld+json";

  script.text = JSON.stringify(schemaData);

  document.head.appendChild(script);

})();
