import { ILab } from '@/models/Lab';

interface IFetchLabs {
  labs: ILab[];
  totalResults: number;
  showingFrom: number;
  showingTo: number;
}

export async function fetchLabs(
  page: string | string[] | number = '1'
): Promise<IFetchLabs> {
  const apiUrl = process.env.NEXT_PUBLIC_API;
  try {
    const res = await fetch(`${apiUrl}/labs?page=${page}`, {
      // cache data for 20 min => revalidate: 1200
      next: { revalidate: 0 }
    });
    if (!res.ok) {
      throw new Error('fetchLabs error - !res.ok - Failed to fetch data');
    }
    const json = await res.json();
    return json;
  } catch (error) {
    console.error('fetchLabs error - catched error', error);
    throw new Error('fetchLabs error - catched error - Failed to fetch data');
  }
}
