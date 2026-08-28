import AdminMediaLibraryClient from "@/components/admin/AdminMediaLibraryClient";
import { getMediaStore } from "@/lib/cms/cmsStore";

export default function AdminMediaPage() {
  const initialItems = getMediaStore();
  return <AdminMediaLibraryClient initialItems={initialItems} />;
}
