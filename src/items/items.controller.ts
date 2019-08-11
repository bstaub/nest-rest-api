import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item-dto';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(): string {
    return 'Hello all Items';
  }

  @Get(':id')
  // findOne(@Param() param: any): string {
  // return `Item ${param.id}`;
  findOne(@Param('id') id: string): string {
    return `Item ${id}`;
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
