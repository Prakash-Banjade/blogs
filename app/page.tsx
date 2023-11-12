import { Button } from "@/components/ui/button";
import Blockquote from "@/components/utils/BlockQuote";
import Link from "next/link";
import BlogsContainer from "./components/BlogsContainer";
import Search from "./components/Search";

export const revalidate = 86400

export default function Home() {
  return (
    <>
      <Blockquote>
        Hello and Welcome! I am Prakash Banjade. Check out my blog articles with ease. For any enqueries or feedback, don't hesitate to contact me through <Button variant="link" asChild className="p-0 text-main"><Link href="/contactMe">Contact Page</Link></Button>.
      </Blockquote>

      <div className="mt-6">
        <Search />
      </div>

      <BlogsContainer />
    </>
  )
}
