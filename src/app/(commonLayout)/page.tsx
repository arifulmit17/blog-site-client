import BlogCard from "@/components/modules/homepage/BlogCard";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { blogService } from "@/services/blog.service";
import { userService } from "@/services/user.service";
import { BlogPost } from "@/types";
import { cookies } from "next/headers";


export default async function Home() {
  // const {data}= await userService.getSession()
  const {data}= await blogService.getPosts(
    {
      isFeatured: true,
    },
    {
      cache: "no-store",
    },
  )
  console.log(data);
  return (
     <div className="grid grid-cols-3 max-w-7xl mx-auto px-4 gap-6">
      {data?.map((post: BlogPost) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
