export const metadata = {
  title: 'Blog',
  description: 'Lorem ipsum',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
