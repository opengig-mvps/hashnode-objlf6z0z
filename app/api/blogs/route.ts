import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') || '1', 10);
    const limit = parseInt(url.searchParams.get('limit') || '10', 10);
    const offset = (page - 1) * limit;

    const blogs = await prisma.blog.findMany({
      skip: offset,
      take: limit,
      select: {
        id: true,
        title: true,
        summary: true,
        createdAt: true,
        updatedAt: true,
        authorId: true,
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Blogs retrieved successfully',
      data: blogs,
    }, { status: 200 });

  } catch (error: any) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ success: false, message: 'Internal server error', data: error }, { status: 500 });
  }
}