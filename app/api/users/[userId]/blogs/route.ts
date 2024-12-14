import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

type BlogRequestBody = {
  title: string;
  content: string;
  summary: string;
};

export async function POST(
  request: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const userId = parseInt(params.userId, 10);
    if (isNaN(userId)) {
      return NextResponse.json({ success: false, message: 'Invalid user ID' }, { status: 400 });
    }

    const body: BlogRequestBody = await request.json();
    const { title, content, summary } = body;

    if (!title || !content || !summary) {
      return NextResponse.json({ success: false, message: 'Missing required fields' }, { status: 400 });
    }

    const user = await prisma.user.findFirst({
      where: { id: userId },
    });

    if (!user) {
      return NextResponse.json({ success: false, message: 'User not found' }, { status: 404 });
    }

    if (user.role !== 'registered user') {
      return NextResponse.json({ success: false, message: 'User is not authorized to create a blog post' }, { status: 403 });
    }

    const blog = await prisma.blog.create({
      data: {
        title,
        content,
        summary,
        authorId: userId,
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Blog post created successfully',
      data: {
        id: blog.id,
        title: blog.title,
        content: blog.content,
        summary: blog.summary,
        createdAt: blog.createdAt.toISOString(),
        updatedAt: blog.updatedAt.toISOString(),
        authorId: blog.authorId,
      },
    }, { status: 201 });

  } catch (error: any) {
    console.error('Error creating blog post:', error);
    return NextResponse.json({ success: false, message: 'Internal server error', data: error }, { status: 500 });
  }
}