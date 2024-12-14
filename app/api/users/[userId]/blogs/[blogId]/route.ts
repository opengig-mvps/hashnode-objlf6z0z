import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// Define the type for the request body
type BlogUpdateRequestBody = {
  title: string;
  content: string;
  summary: string;
};

// Define the PUT method handler for updating a blog post
export async function PUT(
  request: Request,
  { params }: { params: { userId: string; blogId: string } }
) {
  try {
    // Validate and parse the userId and blogId parameters
    const userId = parseInt(params.userId, 10);
    const blogId = parseInt(params.blogId, 10);

    if (isNaN(userId) || isNaN(blogId)) {
      return NextResponse.json({ success: false, message: 'Invalid user ID or blog ID' }, { status: 400 });
    }

    // Parse the request body
    const body: BlogUpdateRequestBody = await request.json();

    // Validate required fields
    const { title, content, summary } = body;
    if (!title || !content || !summary) {
      return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
    }

    // Check if the user is the author of the blog post
    const blog = await prisma.blog.findFirst({
      where: { id: blogId, authorId: userId },
    });

    if (!blog) {
      return NextResponse.json({ success: false, message: 'Blog post not found or user not authorized' }, { status: 404 });
    }

    // Update the blog post
    const updatedBlog = await prisma.blog.update({
      where: { id: blogId },
      data: {
        title,
        content,
        summary,
      },
    });

    // Send a success response with the updated blog post data
    return NextResponse.json({
      success: true,
      message: 'Blog post updated successfully',
      data: updatedBlog,
    }, { status: 200 });

  } catch (error: any) {
    console.error('Error updating blog post:', error);
    return NextResponse.json({ success: false, message: 'Internal server error', data: error }, { status: 500 });
  }
}