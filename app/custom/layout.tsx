import DansranFooter from "@/components/dansran-footer"

export default function CustomLayout({ children }: { children: React.ReactNode }) {
  return <>{children}<DansranFooter /></>
}
