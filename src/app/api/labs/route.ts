import dbConnect from '@/lib/dbConnect';
import { NextRequest, NextResponse } from 'next/server';
import { Lab } from '@/models/Lab';
import { RESULTS_PER_PAGE } from '@/constants/search-options';

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const itemsPerPage = RESULTS_PER_PAGE || 9;
  const pageString = searchParams.get('page');
  const query = searchParams.get('query');
  // if (pageString && isNaN(Number(pageString))) {
  //   return NextResponse.json('Not a number', { status: 400 });
  // }
  const page = Number(pageString) || 1;
  const skipValue = itemsPerPage * page - itemsPerPage;

  // Buscar en arrays: https://stackoverflow.com/questions/63507376/mongodb-mongoose-find-if-array-contains-includes#63507514

  try {
    await dbConnect();
    //const totalResults = await Lab.countDocuments();

    const [results] = await Lab.aggregate([
      {
        $match: {
          $or: [
            { name: { $regex: /Encendida/i } },
            { description: { $regex: /lorem/i } }
          ]
        }
      },
      {
        $facet: {
          metaData: [{ $count: 'count' }],
          data: [{ $skip: (page - 1) * itemsPerPage }, { $limit: itemsPerPage }]
        }
      }
    ]);

    const totalResults = results.metaData[0].count;
    const labs = results.data;

    const showingFrom = skipValue + 1;
    const showingTo =
      totalResults < itemsPerPage * page ? totalResults : itemsPerPage * page;

    return NextResponse.json(
      { labs, totalResults, showingFrom, showingTo },
      { status: 200 }
    );
  } catch (error) {
    console.error('route api/labs error - catched error', error);
    return NextResponse.json(error, { status: 500 });
  }
}
