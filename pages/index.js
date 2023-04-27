import MessageArea from '@/components/MessageArea'
import RightSidebar from '@/components/RightSidebar'
import SideNavbar from '@/components/SideNavbar'

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-row items-center justify-between"
    >
      <SideNavbar />
      <MessageArea />
      <RightSidebar />
    </main>
  )
}
