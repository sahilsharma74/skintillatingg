import { getMediaStore } from "@/lib/cms/cmsStore";
import AdminMediaLibraryClient from "@/components/admin/AdminMediaLibraryClient";

export default function AdminMediaLibraryPage() {
  const mediaItems = getMediaStore();

  return <AdminMediaLibraryClient initialItems={mediaItems} />;
}
