import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item-dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    // return 'Hello all Items';
    return this.itemsService.findAll();
  }

  @Get(':id')
  // findOne(@Param() param: any): string {
  // return `Item ${param.id}`;
  findOne(@Param('id') id: string): Promise<Item> {
    // return `Item ${id}`;
    return this.itemsService.findOne(id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    // return `Name: ${createItemDto.name}, Beschreibung: ${createItemDto.description}`;
    return this.itemsService.create(createItemDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Item> {
    // return `Delete ${id}`;
    return this.itemsService.delete(id);
  }

  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id: string): Promise<Item> {
    // return `Update: ${id}, Name: ${updateItemDto.name}`;
    return this.itemsService.update(id, updateItemDto);
  }
}
