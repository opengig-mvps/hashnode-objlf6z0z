'use client' ;
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { User, Star, MessageSquare } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-100 to-green-50">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tight text-green-900 sm:text-5xl xl:text-6xl">
                    Welcome to Our Blogging Community
                  </h1>
                  <p className="max-w-xl mx-auto text-lg text-green-800">
                    Share your thoughts and discover new perspectives through engaging blogs.
                  </p>
                </div>
                <div className="flex justify-center mt-6">
                  <Button className="rounded-lg bg-green-600 text-white px-8 py-3 text-sm md:text-base hover:bg-green-700">
                    Start Writing
                  </Button>
                </div>
              </div>
              <img
                src="https://picsum.photos/seed/picsum/200/300"
                alt="Blogging"
                className="mx-auto aspect-auto overflow-hidden rounded-xl object-cover w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
                  Popular Blogs
                </h2>
                <p className="max-w-lg mx-auto text-lg text-green-800">
                  Dive into our most-read blog posts and discover a world of ideas.
                </p>
              </div>
              <div className="grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 py-8">
                <Card className="flex flex-col items-start space-y-4 p-6 bg-green-50">
                  <Avatar className="mb-4">
                    <AvatarImage src="https://picsum.photos/seed/picsum/200/300" />
                    <AvatarFallback>NE</AvatarFallback>
                  </Avatar>
                  <CardHeader>
                    <CardTitle>Blog Title 1</CardTitle>
                    <CardDescription>Author: John Doe</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Explore the wonders of nature and science in this captivating blog post...</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Read More
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="flex flex-col items-start space-y-4 p-6 bg-green-50">
                  <Avatar className="mb-4">
                    <AvatarImage src="https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s" />
                    <AvatarFallback>NE</AvatarFallback>
                  </Avatar>
                  <CardHeader>
                    <CardTitle>Blog Title 2</CardTitle>
                    <CardDescription>Author: Jane Smith</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Discover the latest trends in tech and innovation with our expert insights...</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Read More
                    </Button>
                  </CardFooter>
                </Card>
                <Card className="flex flex-col items-start space-y-4 p-6 bg-green-50">
                  <Avatar className="mb-4">
                    <AvatarImage src="https://fastly.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY" />
                    <AvatarFallback>NE</AvatarFallback>
                  </Avatar>
                  <CardHeader>
                    <CardTitle>Blog Title 3</CardTitle>
                    <CardDescription>Author: Emily Davis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Uncover the secrets of culinary arts with delicious recipes and tips...</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Read More
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-200">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
                  Join Our Community
                </h2>
                <p className="text-lg text-green-800">
                  Be a part of a thriving community of writers and readers. Share your thoughts or discover new ideas.
                </p>
                <div className="flex flex-col space-y-4">
                  <Input placeholder="Enter your email to join" />
                  <Button className="bg-green-600 text-white hover:bg-green-700">
                    Subscribe
                  </Button>
                </div>
              </div>
              <div>
                <img
                  src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3h3Z2cwOThud2U4aGppOWFpOWI2dXRtNWhpcnNmdGUzN2VwcTZ3MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/12voxtUHROcg7K/giphy.gif"
                  alt="Join Community"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
                  Write a Blog
                </h2>
                <p className="max-w-lg mx-auto text-lg text-green-800">
                  Share your experiences and ideas by writing a blog. It's simple and easy!
                </p>
              </div>
              <div className="w-full max-w-2xl">
                <Textarea placeholder="Start writing your blog here..." className="w-full h-40 p-4 rounded-lg border border-green-200" />
                <div className="flex justify-end mt-4">
                  <Button className="bg-green-600 text-white hover:bg-green-700">
                    Publish Blog
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;