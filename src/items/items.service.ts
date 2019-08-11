import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface'

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '123',
      name: 'Item1',
      description: 'Item One Desc',
      qty: 1,
    },
    {
      id: '1234',
      name: 'Item1',
      description: 'Item Two Desc',
      qty: 5,
    },
  ];

  findAll(): Item[] {
    return this.items;
  }
}
