import { notFound } from "next/navigation";
import { SERVICE_CATEGORIES, getCategoryBySlug } from "../../lib/servicesData";
import CategoryClientComponent from "./CategoryClientComponent";

export function generateStaticParams() {
  return SERVICE_CATEGORIES.map((cat) => ({
    category: cat.slug,
  }));
}

export async function generateMetadata(props: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await props.params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) return {};

  return {
    title: `${category.name} — WELONIX Enterprise Platform`,
    description: category.shortDesc,
  };
}

export default async function CategoryPage(props: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await props.params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  return <CategoryClientComponent category={category} />;
}
