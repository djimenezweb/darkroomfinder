import dbConnect from '@/lib/dbConnect';
import { NextResponse } from 'next/server';
import { Lab } from '@/models/Lab';

export async function GET() {
  try {
    await dbConnect();
    const labs = await Lab.find().lean();
    return NextResponse.json(labs, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
