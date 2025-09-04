import {
  getProductBySlug,
  getProjectBySlug,
} from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";
import PostImages from "@/components/shared/data/post-images";
import Link from "next/link";
const PostDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;

  const project = await getProjectBySlug(slug);
  if (!project) notFound();
  return (
    <>
      <section>
        <div className="w-f items-center justify-center">
          <PostImages images={project.images} />
        </div>
        <div className="flex flex-col wrapper gap-4">
          <div className="flex flex-col gap-6">
            <h1 className="h3-bold">{project.title}</h1>
          </div>
          <div>
            <ul className="list-inside list-disc">
              <li>개발기간: {project.period}</li>
              <li>개발인원: {project.personnel}</li>
              {Object.entries(project.additionalInfo).map(([platform, url]) => (
                <li key={url}>
                  <span>{platform}: </span>
                  <Link href={url} target="_blank" rel="noopener noreferrer">
                    {url}
                  </Link>
                </li>
              ))}
            </ul>
            <div>기술: {project.skills.join(", ")}</div>
          </div>
          <div>{project.content}</div>
        </div>
      </section>
    </>
  );
};

export default PostDetailsPage;
