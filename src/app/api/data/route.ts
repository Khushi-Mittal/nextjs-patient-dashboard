import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '12');
    const search = searchParams.get('search')?.toLowerCase() || '';

    const filePath = path.join(process.cwd(), 'public', 'data.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    let data = JSON.parse(jsonData);

    if (search) {
      data = data.filter((item: any) => 
        item.patient_name?.toLowerCase().includes(search) || 
        item.contact[0]?.email?.toLowerCase().includes(search)
      );
    }

    const total = data.length;
    const startIndex = (page - 1) * limit;
    const paginatedData = data.slice(startIndex, startIndex + limit);

    return NextResponse.json({
      data: paginatedData,
      total,
      page,
      totalPages: Math.ceil(total / limit)
    });
  } catch (e) {
    return NextResponse.json({ error: "File not found" }, { status: 500 });
  }
}