export const metadata = {
  title: "Admin",
  description: "Admin",
};
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
