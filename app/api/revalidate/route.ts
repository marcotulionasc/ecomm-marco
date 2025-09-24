import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { path } = body;

    if (!path) {
      return NextResponse.json(
        { success: false, error: 'Missing path' },
        { status: 400 }
      );
    }

    revalidatePath(path);

    return NextResponse.json({
      success: true,
      message: `Revalidated path: ${path}`,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const path = url.searchParams.get('path') || '/';
  
  try {
    revalidatePath(path);
    
    return NextResponse.json({
      success: true,
      message: `Revalidated path: ${path}`,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
