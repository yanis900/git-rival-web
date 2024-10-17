
"use client"
import { Separator } from "@/components/ui/separator";
import Post from "@/components/Post";
import Nav from "@/components/Nav";
import Leaderboard from "@/components/Leaderboard";
import PostInput from "@/components/PostInput";
import Profile from "@/components/Profile";
import { useUser } from "@clerk/nextjs";

export default function Page() {
  const { isSignedIn, isLoaded } = useUser()

  if (!isLoaded) {
    // Handle loading state however you like
    return null
  }

  if (isSignedIn) {
    return (
      <div className="min-h-screen bg-gray-100">
       <Nav />
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Left column: User profile */}
            <div className="md:col-span-3">
              <Profile />
            </div>
            {/* Middle column: Posts and Activity feed */}
            <div className="md:col-span-6 space-y-3">
              <PostInput />
              <Separator className="mb-4" />
              <Post />
            </div>
            {/* Right column: Leaderboard */}
            <div className="hidden md:col-span-3 md:block">
              <Leaderboard />
            </div>
          </div>
        </main>
      </div>
    )
  }

  return <div>Not signed in</div>
  
}
