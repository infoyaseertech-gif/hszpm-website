import PageHero from "@/components/UI/PageHero";
import NewsCard from "@/components/News/NewsCard";
import { newsArticles } from "@/lib/data";

export const metadata = {
  title: "News — APM",
  description: "Reported news on APM's 2027 presidential campaign, its candidates, and party activities.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News"
        title="APM 2027: the road so far"
        description="Every story below links to its original source — read the full report before citing any of it."
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
