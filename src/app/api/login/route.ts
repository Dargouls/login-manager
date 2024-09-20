import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
	console.log(request.body);
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return NextResponse.json({ message: 'success' }, { status: 200 });
}
