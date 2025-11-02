import Link from "next/link";
import LatestVideos from "@/components/LatestVideos";
import FeaturedPosts from "@/components/FeaturedPosts";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 section-padding">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white animate-fade-in">
              프린들
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in delay-100">
              미국 경제를 쉽고 명확하게
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 animate-fade-in delay-200">
              복잡한 경제 현상을 일상 언어로 풀어내는 경제 분석 채널
            </p>
            <div className="flex gap-4 justify-center flex-wrap animate-fade-in delay-300">
              <Link href="/videos" className="btn-primary">
                유튜브 영상 보기
              </Link>
              <Link href="/blog" className="btn-secondary">
                경제 분석 읽기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Videos Section */}
      <section className="section-padding bg-white dark:bg-gray-800">
        <div className="container">
          <div className="flex justify-between items-center mb-8 animate-slide-in-left">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              최신 영상
            </h2>
            <Link
              href="/videos"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
            >
              전체 보기 →
            </Link>
          </div>
          <div className="animate-fade-in delay-200">
            <LatestVideos />
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900">
        <div className="container">
          <div className="flex justify-between items-center mb-8 animate-slide-in-right">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              추천 분석
            </h2>
            <Link
              href="/blog"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
            >
              전체 보기 →
            </Link>
          </div>
          <div className="animate-fade-in delay-200">
            <FeaturedPosts />
          </div>
        </div>
      </section>

      {/* Community CTA Section */}
      <section className="section-padding bg-blue-600 dark:bg-blue-700">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center animate-scale-in">
            <h2 className="text-3xl font-bold text-white mb-4">
              커뮤니티에 참여하세요
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              경제에 대한 생각을 나누고, 질문하고, 함께 배워요
            </p>
            <Link
              href="/community"
              className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors"
            >
              커뮤니티 둘러보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
