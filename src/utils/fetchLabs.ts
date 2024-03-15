import { ILab } from '@/models/Lab';

export async function fetchLabs(): Promise<ILab[]> {
  const apiUrl = process.env.NEXT_PUBLIC_API;
  try {
    const res = await fetch(`${apiUrl}/labs`, {
      next: { revalidate: 1200 }
    });
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const json = await res.json();
    return json;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}
