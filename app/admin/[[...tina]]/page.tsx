import { redirect } from "next/navigation";

// TinaCMS builds its admin panel as a static site into public/admin.
// This page redirects /admin (and any sub-routes) to that static bundle.
export default function AdminPage() {
    redirect("/admin/index.html");
}
