export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>BLOG</h1>
      {children}
    </div>
  );
}
