import { Header } from '@/components/header'

export default function AppLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex flex-col h-full">
      <Header />
      {children}
    </div>
  )
}
