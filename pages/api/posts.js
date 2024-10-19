const posts = [
    {
      id: 1,
      title: "Exploring AI: The Future of Data Science",
      feature_image: "https://example.com/ai-data-science.jpg",
      published_at: "2024-09-25",
      primary_author: { name: "Hamza Rafique" },
      content: "AI is revolutionizing Data Science, offering deeper insights and automating complex data-driven tasks."
    },
    {
      id: 2,
      title: "How Machine Learning is Shaping Data-Driven Decisions",
      feature_image: "https://example.com/machine-learning.jpg",
      published_at: "2024-10-01",
      primary_author: { name: "Hamza Rafqiue" },
      content: "Machine Learning is playing a crucial role in predictive analytics, helping businesses make smarter decisions."
    },
    {
      id: 3,
      title: "The Intersection of AI and Big Data: What's Next?",
      feature_image: "https://example.com/ai-big-data.jpg",
      published_at: "2024-09-30",
      primary_author: { name: "Hamza Rafqiue" },
      content: "AI and Big Data are converging to offer new opportunities for data analysis, predictions, and automation."
    },
  ];
  
  export default function handler(req, res) {
    res.status(200).json(posts);
  }
  