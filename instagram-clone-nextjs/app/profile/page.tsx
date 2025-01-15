import { getSessionEmail } from "@/actions/actions";
import PostsGrid from "@/components/PostsGrid";
import { prisma } from "@/utils/prismaClient";

export default async function ProfilePage() {
  const sessionEmail = await getSessionEmail();

  const posts = await prisma.post.findMany({
    where: {
      author: sessionEmail,
    },
  });

  return (
    <div className="mt-4">
      {posts.length > 0 ? (
        <PostsGrid posts={posts} />
      ) : (
        <p className="text-center font-semibold text-gray-400">
          No posts to show.
        </p>
      )}
    </div>
  );
}
