import ProjectForm from "@/components/admin/project-form";
import { requireAdmin } from "@/lib/auth-guard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "프로젝트 생성",
};
const CreateProjectPage = async () => {
  await requireAdmin();

  return (
    <>
      <h2 className="h2-bold">프로젝트 생성</h2>
      <div className="my-8">
        <ProjectForm sort="Create" />
      </div>
    </>
  );
};

export default CreateProjectPage;
