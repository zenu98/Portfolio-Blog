import { requireAdmin } from "@/lib/auth-guard";

const AdminOverviewPage = async () => {
  await requireAdmin();
  return <>Overview</>;
};

export default AdminOverviewPage;
