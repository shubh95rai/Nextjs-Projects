import PostsGrid from "@/components/PostsGrid";
import TopNav from "@/components/TopNav";
import { prisma } from "@/utils/prismaClient";

export default async function BrowsePage() {
  const posts = await prisma.post.findMany({});
  return (
    <div className="mx-auto max-w-md space-y-8 md:max-w-2xl xl:max-w-4xl">
      <TopNav>Browse</TopNav>
      <PostsGrid posts={posts} />
    </div>
  );
}
