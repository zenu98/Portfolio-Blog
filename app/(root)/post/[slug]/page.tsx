import {
  getProductBySlug,
  getProjectBySlug,
} from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";
import PostImages from "@/components/shared/data/post-images";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
const PostDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;

  const platformConfig = {
    Link: { icon: "/images/icons/home.png", label: "웹사이트" },
    Android: { icon: "/images/icons/android.png", label: "Android" },
    Ios: { icon: "/images/icons/ios.png", label: "iOS" },
    Github: { icon: "/images/icons/github.png", label: "GitHub" },
  };

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

              <li className="flex flex-wrap gap-1">
                {project.skills.map((skill, index) => (
                  <Badge key={index} variant="default">
                    {skill}
                  </Badge>
                ))}
              </li>
            </ul>

            {Object.keys(project.additionalInfo).length > 0 && (
              <div className="mt-4">
                <h4 className="font-medium mb-2">프로젝트 링크</h4>
                <div className="flex flex-row gap-2 flex-wrap">
                  {Object.entries(project.additionalInfo).map(
                    ([platform, url]) => {
                      const config =
                        platformConfig[platform as keyof typeof platformConfig];
                      if (!config) return null;

                      return (
                        <Link
                          key={url}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        >
                          <Image
                            src={config.icon}
                            alt={config.label}
                            width={20}
                            height={20}
                            className="w-5 h-5"
                          />
                          <span className="text-sm">{config.label}</span>
                        </Link>
                      );
                    }
                  )}
                </div>
              </div>
            )}
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
