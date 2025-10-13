import {
  getProductBySlug,
  getProjectBySlug,
} from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";
import PostImages from "@/components/shared/data/post-images";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
const PostDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;

  const project = await getProjectBySlug(slug);
  if (!project) notFound();
  return (
    <>
      <section>
        <div className="w-f">
          <PostImages images={project.images} />
        </div>
        <div className="flex flex-col gap-4 border  border-gray-200 dark:border-gray-700 rounded-2xl mt-4 m-4 md:m-12 lg:m-20 p-8">
          <div className="flex flex-col gap-6">
            <h2 className="pb-2 h2-responsive font-semibold border-b-1 border-gray-200 dark:border-gray-700">
              {project.title}
            </h2>
          </div>
          <div>
            <ul className="list-inside list-disc space-y-3">
              <li>개발기간 : {project.period}</li>
              <li>개발인원 : {project.personnel}</li>
              {Object.entries(project.additionalInfo).map(([platform, url]) => (
                <li key={url}>
                  <span>{platform} : </span>
                  <Link
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline transition-colors"
                  >
                    {url}
                  </Link>
                </li>
              ))}
              <li className="flex flex-wrap gap-1">
                {project.skills.map((skill, index) => (
                  <Badge key={index} variant="default">
                    {skill}
                  </Badge>
                ))}
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <h3 className="pb-2 h3-responsive font-semibold border-b-1 border-gray-200 dark:border-gray-700 ">
              프로젝트 상세
            </h3>
            <div className="prose prose-lg dark:prose-invert ">
              <div className="whitespace-pre-line leading-7">
                {project.content}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostDetailsPage;
