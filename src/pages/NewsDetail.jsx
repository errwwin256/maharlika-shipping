import { useParams, Link } from "react-router-dom";
import newsData from "../data/newsData";

export default function NewsDetail() {
  const { id } = useParams();
  const article = newsData.find((item) => item.id === id);

  if (!article) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-bold">Article not found</h2>
        <Link to="/" className="text-blue-600 underline mt-4 block">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{article.date}</p>
      <p className="text-lg leading-relaxed">{article.content}</p>
      <Link to="/" className="inline-block mt-8 text-palm hover:underline">
        ← Back to News
      </Link>
    </div>
  );
}
