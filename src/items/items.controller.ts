import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item-dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Item[] {
    // return 'Hello all Items';
    return this.itemsService.findAll();
  }

  @Get(':id')
  // findOne(@Param() param: any): string {
  // return `Item ${param.id}`;
  findOne(@Param('id') id: string): Item {
    // return `Item ${id}`;
    return this.itemsService.findOne(id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name}, Beschreibung: ${createItemDto.description}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return `Delete ${id}`;
  }

  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id: string): string {
    return `Update: ${id}, Name: ${updateItemDto.name}`;
  }
}
