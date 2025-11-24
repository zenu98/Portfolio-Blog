import ProjectForm from "@/components/admin/project-form";
import { getProjectById } from "@/lib/actions/product.actions";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "프로젝트 수정",
};
const AdminProjectUpdatePage = async (props: {
  params: Promise<{
    id: string;
  }>;
}) => {
  const { id } = await props.params;
  const project = await getProjectById(id);
  if (!project) return notFound();
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <h2 className="h2-bold">
        <ProjectForm sort="Update" project={project} projectId={project.id} />
      </h2>
    </div>
  );
};

export default AdminProjectUpdatePage;
