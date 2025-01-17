"use client";

import { Bookmark, Like, Post, Profile } from "@prisma/client";
import Image from "next/image";
import LikesInfo from "./LikesInfo";
import BookmarkInfo from "./BookmarkInfo";
import Avatar from "./Avatar";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePostsContent({
  posts,
  profiles,
  myLikes,
  myBookmarks,
}: {
  posts: Post[];
  profiles: Profile[];
  myLikes: Like[];
  myBookmarks: Bookmark[];
}) {
  const [allPosts, setAllPosts] = useState(posts.slice(0, 5));
  const [hasMore, setHasMore] = useState(true);

  function loadMorePosts() {
    setAllPosts((prevPosts) => {
      const currentPostsLength = prevPosts.length;

      const morePosts = posts.slice(currentPostsLength, currentPostsLength + 5);

      if (morePosts.length === 0) {
        setHasMore(false);
        return prevPosts;
      }

      return [...prevPosts, ...morePosts];
    });
  }

  function handleScroll() {
    debounce(200);
  }

  let timer: NodeJS.Timeout;

  function debounce(delay: number) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 100
      ) {
        loadMorePosts();
      }
    }, delay);
  }

  useEffect(() => {
    if (hasMore) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasMore]);

  return (
    <>
      {" "}
      {allPosts.length > 0 ? (
        allPosts.map((post) => {

          const profile = profiles.find((f) => {
            return post.author === f?.email;
          });

          const postLikesCount = posts.find((f) => {
            return post.id === f?.id;
          })!; 

          return (
            <div
              key={post.id}
              className="mx-auto flex max-w-lg flex-col justify-between gap-4 rounded-md bg-gray-100 p-4 shadow dark:bg-neutral-800"
            >
              <section className="flex items-center gap-2">
                <Avatar src={profile?.avatar || ""} size="size-10" />
                <p className="font-semibold">{profile?.username}</p>
              </section>

              <section className="flex aspect-square size-full items-center">
                <Link href={`/posts/${post.id}`} className="size-full">
                  <Image
                    src={post.image}
                    alt="image"
                    width={500}
                    height={500}
                    className="size-full object-contain"
                    priority
                  />
                </Link>
              </section>

              <section className="flex justify-between border-t-2 border-neutral-700 pt-4">
                <LikesInfo
                  post={postLikesCount}
                  sessionLike={
                    myLikes.find((like) => {
                      return like.postId === post.id;
                    }) || null
                  }
                />
                <BookmarkInfo
                  post={post}
                  sessionBookmark={
                    myBookmarks.find((like) => {
                      return like.postId === post.id;
                    }) || null
                  }
                />
              </section>

              <section className="flex gap-2">
                <p className="font-semibold">{profile?.username}</p>
                <p>{post.description}</p>
              </section>
            </div>
          );
        })
      ) : (
        <p className="text-center font-semibold text-gray-400">
          No posts to show.
        </p>
      )}
    </>
  );
}
