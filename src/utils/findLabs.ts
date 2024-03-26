// THIS VERSION IS FOR TESTING PURPOSES ONLY
// to check whether or not Model.find() can be used like Model.aggregate()

import { RESULTS_PER_PAGE } from '@/constants/search-options';
import dbConnect from '@/utils/dbConnect';
import { ILab, Lab } from '@/models/Lab';

interface IFetchLabs {
  labs: ILab[];
  totalResults: number;
  showingFrom: number;
  showingTo: number;
}

export async function findLabs(
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

  const filter = {
    $or: [
      { name: { $regex: query, $options: 'i' } },
      { description: { $regex: query, $options: 'i' } },
      { 'location.address': { $regex: query, $options: 'i' } },
      { 'location.city': { $regex: query, $options: 'i' } },
      { 'location.state': { $regex: query, $options: 'i' } }
    ],
    $and: [sizes ? sizesFilter : {}, processes ? processesFilter : {}]
  };

  const projection = null;
  const options = { skip: (page - 1) * itemsPerPage, limit: itemsPerPage };

  await dbConnect();
  const results = await Lab.find(filter, projection, options).exec();

  // How can I calculate total results with find()?
  const totalResults = 40;
  const labs = results;

  const showingFrom = skipValue + 1;
  const showingTo =
    totalResults < itemsPerPage * page ? totalResults : itemsPerPage * page;

  return { labs, totalResults, showingFrom, showingTo };
}
