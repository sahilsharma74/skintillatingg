import { notFound } from "next/navigation";
import { getPagesStore } from "@/lib/cms/cmsStore";
import PageSectionEditorClient from "@/components/admin/PageSectionEditorClient";

export default function AdminPageEditor({
  params,
}: {
  params: { pageId: string };
}) {
  const pages = getPagesStore();
  const page = pages[params.pageId];

  if (!page) {
    notFound();
  }

  return <PageSectionEditorClient initialPage={page} />;
}
