import { notFound } from "next/navigation";
import { getAllServiceParams, getServiceBySlugs } from "../../../lib/servicesData";
import ServiceDetailClientComponent from "./ServiceDetailClientComponent";

export function generateStaticParams() {
  return getAllServiceParams();
}

export async function generateMetadata(props: { params: Promise<{ category: string; service: string }> }) {
  const { category: categorySlug, service: serviceSlug } = await props.params;
  const result = getServiceBySlugs(categorySlug, serviceSlug);
  if (!result) return {};

  return {
    title: `${result.service.name} — ${result.category.name} | WELONIX`,
    description: result.service.shortDesc,
  };
}

export default async function ServiceDetailPage(props: { params: Promise<{ category: string; service: string }> }) {
  const { category: categorySlug, service: serviceSlug } = await props.params;
  const result = getServiceBySlugs(categorySlug, serviceSlug);

  if (!result) {
    notFound();
  }

  return (
    <ServiceDetailClientComponent
      category={result.category}
      service={result.service}
    />
  );
}
