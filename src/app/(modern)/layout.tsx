import ModernLayout from '@/layouts/modern/layout';
import MinimalLayout from '@/layouts/minimal/layout';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MinimalLayout>{children}</MinimalLayout>;
}
