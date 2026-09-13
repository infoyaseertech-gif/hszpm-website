import PageHero from "@/components/UI/PageHero";
import NewsCard from "@/components/News/NewsCard";
import { newsArticles } from "@/lib/data";

export const metadata = {
  title: "News — HSZPM",
  description: "Updates from HSZPM's chapters and programmes.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News"
        title="Updates from across the movement"
        description="Stories and updates from HSZPM chapters, programmes, and events."
      />
      <section className="py-16 sm:py-20">
        <div className="container-content grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsArticles.map((article) => (
            <NewsCard key={article.slug} {...article} />
          ))}
        </div>
      </section>
    </>
  );
}
