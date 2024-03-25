import { RESULTS_PER_PAGE } from '@/constants/search-options';
import dbConnect from '@/utils/dbConnect';
import { ILab, Lab } from '@/models/Lab';

interface IFetchLabs {
  labs: ILab[];
  totalResults: number;
  showingFrom: number;
  showingTo: number;
}

// Buscar en arrays: https://stackoverflow.com/questions/63507376/mongodb-mongoose-find-if-array-contains-includes#63507514

export async function getLabs(
  page: number,
  query: string | string[] | undefined
): Promise<IFetchLabs> {
  const itemsPerPage = RESULTS_PER_PAGE || 9;
  const skipValue = itemsPerPage * page - itemsPerPage;

  await dbConnect();

  const matchFilter = {
    $or: [
      { name: { $regex: query, $options: 'i' } },
      { description: { $regex: query, $options: 'i' } }
    ]
  };

  const [results] = await Lab.aggregate([
    {
      $match: query ? matchFilter : {}
    },
    {
      $facet: {
        metaData: [{ $count: 'count' }],
        data: [{ $skip: (page - 1) * itemsPerPage }, { $limit: itemsPerPage }]
      }
    }
  ]);

  const totalResults = results.metaData[0]?.count | 0;
  const labs = results.data;

  const showingFrom = skipValue + 1;
  const showingTo =
    totalResults < itemsPerPage * page ? totalResults : itemsPerPage * page;

  return { labs, totalResults, showingFrom, showingTo };
}
