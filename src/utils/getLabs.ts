import { RESULTS_PER_PAGE } from '@/constants/search-options';
import dbConnect from '@/utils/dbConnect';
import { ILab, Lab } from '@/models/Lab';

interface IFetchLabs {
  labs: ILab[];
  totalResults: number;
  showingFrom: number;
  showingTo: number;
}

export async function getLabs(
  page: number,
  query: string,
  sizes: string | null,
  processes: string | null
): Promise<IFetchLabs> {
  const itemsPerPage = RESULTS_PER_PAGE || 9;
  const skipValue = itemsPerPage * page - itemsPerPage;

  const sizesFilter = {
    sizes: { $all: sizes?.split('+') }
  };

  const processesFilter = {
    processes: { $all: processes?.split('+') }
  };

  await dbConnect();

  const [results] = await Lab.aggregate([
    {
      $match: {
        $or: [
          { name: { $regex: query, $options: 'i' } },
          { description: { $regex: query, $options: 'i' } },
          { 'location.address': { $regex: query, $options: 'i' } },
          { 'location.city': { $regex: query, $options: 'i' } },
          { 'location.state': { $regex: query, $options: 'i' } }
        ],
        $and: [sizes ? sizesFilter : {}, processes ? processesFilter : {}]
      }
    },
    {
      $project: {
        owner: 0,
        'location.address': 0,
        'location.state': 0,
        'location.zipcode': 0,
        'location.country': 0,
        'location.latitude': 0,
        'location.longitude': 0,
        description: 0,
        createdAt: 0,
        updatedAt: 0
      }
    },
    {
      $facet: {
        metaData: [{ $count: 'count' }],
        data: [{ $skip: (page - 1) * itemsPerPage }, { $limit: itemsPerPage }]
      }
    }
  ]);

  console.log('🚀 ~ results:', results);

  const totalResults = results.metaData[0]?.count | 0;
  const labs = results.data;

  const showingFrom = skipValue + 1;
  const showingTo =
    totalResults < itemsPerPage * page ? totalResults : itemsPerPage * page;

  return { labs, totalResults, showingFrom, showingTo };
}
