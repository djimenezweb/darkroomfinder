import { ILab, Lab } from '@/models/Lab';

export async function getLabById(id: string) {
  const data = await Lab.findById(id);
  if (data) {
    return data as ILab;
  }
}
