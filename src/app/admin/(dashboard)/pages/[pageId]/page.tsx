import PageSectionEditorClient from "@/components/admin/PageSectionEditorClient";
import { getPagesStore } from "@/lib/cms/cmsStore";
import { notFound } from "next/navigation";

export default function AdminPageEditorPage({
  params,
}: {
  params: { pageId: string };
}) {
  const pages = getPagesStore();
  const pageData = pages[params.pageId];

  if (!pageData) {
    notFound();
  }

  return <PageSectionEditorClient initialPage={pageData} />;
}
