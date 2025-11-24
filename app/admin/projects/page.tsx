import Link from "next/link";
import {
  getAllProjectAtAdmin,
  deleteProject,
} from "@/lib/actions/product.actions";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatId } from "@/lib/utils";
import DeleteDialog from "@/components/shared/project/delete-dialog";
import { requireAdmin } from "@/lib/auth-guard";

const AdminProjectsPage = async (props: {
  searchParams: Promise<{
    page: string;
    query: string;
    category: string;
  }>;
}) => {
  await requireAdmin();

  const searchParams = await props.searchParams;
  const page = Number(searchParams.page) || 1;
  const searchText = searchParams.query || "";
  const category = searchParams.category || "";

  const projects = await getAllProjectAtAdmin({
    query: searchText,
    limit: 20,
    page,
    category,
  });

  return (
    <div className="space-y-2 ">
      <div className="flex-between">
        <h1 className="h2-bold">Projects</h1>
        <Button asChild variant="default">
          <Link href="/admin/projects/create">프로젝트 생성</Link>
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>TITLE</TableHead>
            <TableHead>CATEGORY</TableHead>
            <TableHead>PERIOD</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.data.map((project) => (
            <TableRow key={project.id}>
              <TableCell>{formatId(project.id)}</TableCell>
              <TableCell>{project.title}</TableCell>
              <TableCell>{project.type}</TableCell>
              <TableCell>{project.period}</TableCell>
              <TableCell className="flex gap-1">
                <Button asChild variant="outline" size="sm">
                  <Link href={`/admin/projects/${project.id}`}>편집</Link>
                </Button>
                <DeleteDialog
                  id={project.id}
                  title={project.title}
                  action={deleteProject}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminProjectsPage;
