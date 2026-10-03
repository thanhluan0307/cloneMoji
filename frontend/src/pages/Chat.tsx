import ChatWindowLayout from "@/components/chat/ChatWindowLayout";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export function Chat() {
  return <SidebarProvider>
    <AppSidebar />
    <div>
      <ChatWindowLayout />
    </div>
  </SidebarProvider>
}