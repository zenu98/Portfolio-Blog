// app/post/[slug]/layout.tsx
export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main>{children}</main>;
}
