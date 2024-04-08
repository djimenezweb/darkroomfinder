import { RESULTS_PER_PAGE } from '@/constants/search-options';
import dbConnect from '@/utils/dbConnect';
import { Lab } from '@/models/Lab';
import { IFetchedLabs } from '@/types/types';

export async function getLabs(
  page: number,
  query: string,
  sizes: string | null,
  processes: string | null
): Promise<IFetchedLabs> {
  const itemsPerPage = RESULTS_PER_PAGE || 9;
  const skipValue = (page - 1) * itemsPerPage;

  // Filters are empty by default
  const filters: { query: any; sizes: any; processes: any } = {
    query: [{}],
    sizes: {},
    processes: {}
  };

  // If query exists, set filter to match that query
  if (query) {
    filters.query = [
      { name: { $regex: query, $options: 'i' } },
      { description: { $regex: query, $options: 'i' } },
      { 'location.address': { $regex: query, $options: 'i' } },
      { 'location.city': { $regex: query, $options: 'i' } },
      { 'location.state': { $regex: query, $options: 'i' } }
    ];
  }

  // If sizes exist, set filter to search in sizes array
  if (sizes) {
    filters.sizes = { sizes: { $all: sizes.split('+') } };
  }

  // If processes exist, set filter to search in processes array
  if (processes) {
    filters.processes = { processes: { $all: processes.split('+') } };
  }

  try {
    await dbConnect();

    const [results] = await Lab.aggregate([
      {
        $match: {
          $or: [...filters.query],
          $and: [filters.sizes, filters.processes]
        }
      },
      {
        $project: {
          name: true,
          'location.city': true,
          images: true,
          isFeatured: true
        }
      },
      {
        $facet: {
          metaData: [{ $count: 'count' }],
          data: [{ $skip: (page - 1) * itemsPerPage }, { $limit: itemsPerPage }]
        }
      }
    ]);

    // console.log('🚀 ~ results:', results);

    const totalResults = results.metaData[0]?.count | 0;
    const labs = results.data;

    const showingFrom = skipValue + 1;
    const showingTo =
      totalResults < itemsPerPage * page ? totalResults : itemsPerPage * page;

    return { labs, totalResults, showingFrom, showingTo };
  } catch (error) {
    console.log(error);
    throw new Error('Failed to get darkrooms data');
  }
}
