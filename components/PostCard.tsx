import Link from "next/link";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

export default function PostCard({ post }: { post: Post }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <article className="card p-6 h-full flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-lg">
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-3 py-1 rounded-full transition-colors group-hover:bg-blue-200 dark:group-hover:bg-blue-800">
            {post.category}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {post.readTime}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-3">
          {post.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow line-clamp-3">
          {post.excerpt}
        </p>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {formatDate(post.date)}
        </div>
      </article>
    </Link>
  );
}
