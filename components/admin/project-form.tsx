"use client";
import { X } from "lucide-react";
import { insertProjectSchema, updateProjectSchema } from "@/lib/validators";
import { Project } from "@/types";
import { useRouter } from "next/navigation";
import {
  Controller,
  useForm,
  ControllerFieldState,
  ControllerRenderProps,
  useFieldArray,
  SubmitHandler,
} from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { projectDefaultValues } from "@/lib/constants";
import slugify from "slugify";
import { Field, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { createProject, updateProject } from "@/lib/actions/product.actions";
import { toast } from "sonner";
import { UploadButton } from "@/lib/uploadthing";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
const ProjectForm = ({
  sort,
  project,
  projectId,
}: {
  sort: "Create" | "Update";
  project?: Project;
  projectId?: string;
}) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof insertProjectSchema>>({
    resolver: zodResolver(
      sort === "Create" ? insertProjectSchema : updateProjectSchema
    ),
    defaultValues:
      project && sort === "Update" ? project : projectDefaultValues,
  });
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "links",
  });

  const onSubmit: SubmitHandler<z.infer<typeof insertProjectSchema>> = async (
    values
  ) => {
    // Create
    if (sort === "Create") {
      const res = await createProject(values);

      if (!res.success) {
        const errorMessage =
          typeof res.message === "string"
            ? res.message
            : JSON.stringify(res.message);

        toast.error(errorMessage);
      } else {
        const successMessage =
          typeof res.message === "string"
            ? res.message
            : JSON.stringify(res.message);

        toast.success(successMessage);
        router.push("/admin/projects");
      }
    }

    // Update
    if (sort === "Update") {
      if (!projectId) {
        router.push("/admin/projects");
        return;
      }
      const res = await updateProject({ ...values, id: projectId });

      if (!res.success) {
        const errorMessage =
          typeof res.message === "string"
            ? res.message
            : JSON.stringify(res.message);

        toast.error(errorMessage);
      } else {
        const successMessage =
          typeof res.message === "string"
            ? res.message
            : JSON.stringify(res.message);

        toast.success(successMessage);
        router.push("/admin/projects");
      }
    }
  };

  const images = form.watch("images");

  return (
    <form
      className="space-y-8"
      method="POST"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <div className="flex flex-col md:flex-row gap-5">
        {/* 제목 */}
        <Controller
          control={form.control}
          name="title"
          render={({
            field,
          }: {
            field: ControllerRenderProps<
              z.infer<typeof insertProjectSchema>,
              "title"
            >;
          }) => (
            <Field className="w-full">
              <FieldLabel htmlFor="title">제목</FieldLabel>
              <Input id="title" placeholder="프로젝트명" {...field} />
            </Field>
          )}
        />
        {/* 슬러그 */}
        <Controller
          control={form.control}
          name="slug"
          render={({
            field,
          }: {
            field: ControllerRenderProps<
              z.infer<typeof insertProjectSchema>,
              "slug"
            >;
          }) => (
            <Field className="w-full">
              <FieldLabel htmlFor="slug">Slug</FieldLabel>
              <Input id="slug" {...field} />
            </Field>
          )}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        {/* 기간 */}
        <Controller
          control={form.control}
          name="period"
          render={({
            field,
          }: {
            field: ControllerRenderProps<
              z.infer<typeof insertProjectSchema>,
              "period"
            >;
          }) => (
            <Field className="w-full">
              <FieldLabel htmlFor="period">기간</FieldLabel>
              <Input
                id="period"
                placeholder="ex) 2025.10.23 ~ 2025.12.31"
                {...field}
              />
            </Field>
          )}
        />
        {/* 참여인원 */}
        <Controller
          control={form.control}
          name="personnel"
          render={({
            field,
          }: {
            field: ControllerRenderProps<
              z.infer<typeof insertProjectSchema>,
              "personnel"
            >;
          }) => (
            <Field className="w-full">
              <FieldLabel htmlFor="personnel">참여인원</FieldLabel>
              <Input id="personnel" {...field} />
            </Field>
          )}
        />
      </div>
      {/* 타입 */}
      <div className="flex flex-col md:flex-row gap-5">
        <Controller
          control={form.control}
          name="type"
          render={({
            field,
          }: {
            field: ControllerRenderProps<
              z.infer<typeof insertProjectSchema>,
              "type"
            >;
          }) => (
            <Field className="w-full">
              <FieldLabel htmlFor="personnel">카테고리</FieldLabel>
              <Select
                value={field.value}
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="카테고리를 선택해주세요" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Category</SelectLabel>
                    <SelectItem value="main">메인</SelectItem>
                    <SelectItem value="side">사이드</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
          )}
        />
        <Controller
          control={form.control}
          name="skills"
          render={({ field }) => (
            <Field className="w-full">
              <FieldLabel htmlFor="skills">스킬 (쉼표로 구분)</FieldLabel>
              <Input
                id="skills"
                placeholder="React, TypeScript, Next.js"
                // ⭐ 문자열로 저장
                value={
                  typeof field.value === "string"
                    ? field.value
                    : field.value?.join(", ") || ""
                }
                onChange={(e) => {
                  // ⭐ 그냥 문자열로 저장
                  field.onChange(e.target.value);
                }}
                // ⭐ blur(포커스 아웃)할 때만 배열로 변환
                onBlur={(e) => {
                  const skillsArray = e.target.value
                    .split(",")
                    .map((skill) => skill.trim())
                    .filter((skill) => skill !== "");
                  field.onChange(skillsArray);
                }}
              />
              <p className="text-sm text-gray-500 mt-1">
                쉼표로 구분하여 입력하세요
              </p>
            </Field>
          )}
        />
      </div>
      <div className="upload-field flex flex-col md:flex-row gap-5">
        {/*이미지*/}
        <Controller
          control={form.control}
          name="images"
          render={({
            field,
          }: {
            field: ControllerRenderProps<
              z.infer<typeof insertProjectSchema>,
              "images"
            >;
          }) => (
            <Field className="w-full">
              <FieldLabel htmlFor="images">이미지</FieldLabel>
              <Card>
                <CardContent className="space-y-2 mt-2 min-h-48">
                  <div className="flex flex-wrap gap-2">
                    {images.map((image: string, index: number) => (
                      <div key={image} className="relative group">
                        {/* ⭐ relative 추가 */}
                        <Image
                          src={image}
                          alt="project-image"
                          className="w-20 h-20 object-cover object-center rounded-sm"
                          width={100}
                          height={100}
                        />
                        <button
                          type="button"
                          onClick={() => {
                            const newImages = images.filter(
                              (_, i) => i !== index
                            );
                            form.setValue("images", newImages);
                            toast.success("이미지가 삭제되었습니다.");
                          }}
                          className="absolute -top-2 -right-2 border-1 hover:border-red-500 bg-white text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                          title="이미지 삭제"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                  <UploadButton
                    endpoint="imageUploader"
                    onClientUploadComplete={(res: { url: string }[]) => {
                      form.setValue("images", [...images, res[0].url]);
                    }}
                    onUploadError={(error: Error) => {
                      toast.error(`${error.message}`);
                    }}
                  />
                </CardContent>
              </Card>
            </Field>
          )}
        />
      </div>
      <div className="flex flex-col  gap-5 ">
        <FieldLabel>링크 정보 (선택사항)</FieldLabel>

        {/* Android 앱 링크 */}
        <Controller
          control={form.control}
          name="additionalInfo.Android"
          render={({ field }) => (
            <Field>
              <Input
                placeholder="Android 앱 스토어 URL"
                {...field}
                value={field.value || ""}
              />
            </Field>
          )}
        />

        {/* iOS 앱 URL */}
        <Controller
          control={form.control}
          name="additionalInfo.iOS"
          render={({ field }) => (
            <Field>
              <Input
                placeholder="iOS 앱 스토어 URL"
                {...field}
                value={field.value || ""}
              />
            </Field>
          )}
        />

        {/* Github URL */}
        <Controller
          control={form.control}
          name="additionalInfo.Github"
          render={({ field }) => (
            <Field>
              <Input
                placeholder="Github 저장소 URL"
                {...field}
                value={field.value || ""}
              />
            </Field>
          )}
        />

        {/* 웹사이트 URL */}
        <Controller
          control={form.control}
          name="additionalInfo.Link"
          render={({ field }) => (
            <Field>
              <Input
                placeholder="기타 URL"
                {...field}
                value={field.value || ""}
              />
            </Field>
          )}
        />
      </div>
      <div className="upload-field flex flex-col md:flex-row gap-5">
        <Controller
          control={form.control}
          name="content"
          render={({
            field,
          }: {
            field: ControllerRenderProps<
              z.infer<typeof insertProjectSchema>,
              "content"
            >;
          }) => (
            <Field className="w-full">
              <FieldLabel htmlFor="content">내용</FieldLabel>
              <Textarea className="resize-none" {...field} />
            </Field>
          )}
        />
        {/* 슬러그 */}
      </div>
      <div className="flex justify-end">
        <Button
          type="submit"
          size="lg"
          disabled={form.formState.isSubmitting}
          className="cursor-pointer"
        >
          {form.formState.isSubmitting ? "등록중.." : `${sort}`}
        </Button>
      </div>
    </form>
  );
};

export default ProjectForm;
