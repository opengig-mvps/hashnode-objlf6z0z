import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(
  request: Request,
  { params }: { params: { blogId: string } }
) {
  try {
    const blogId = parseInt(params.blogId, 10);
    if (isNaN(blogId)) {
      return NextResponse.json({ success: false, message: 'Invalid blog ID' }, { status: 400 });
    }

    const blog = await prisma.blog.findUnique({
      where: { id: blogId },
      select: {
        id: true,
        title: true,
        content: true,
        summary: true,
        createdAt: true,
        updatedAt: true,
        authorId: true,
      },
    });

    if (!blog) {
      return NextResponse.json({ success: false, message: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      message: 'Blog retrieved successfully',
      data: blog,
    }, { status: 200 });

  } catch (error: any) {
    console.error('Error fetching blog:', error);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}