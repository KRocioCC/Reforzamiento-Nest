import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { v4 as uuidv4 } from 'uuid';

import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  private products: Product[] = [];
  create(createProductDto: CreateProductDto) {
    const { name, description, price } = createProductDto;

    const newProduct = new Product(uuidv4(), name, description, price);
    this.products.push(newProduct);
    return newProduct;
  }

  findAll() {
    return `This action returns all products`;
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return { message: `Product #${id} updated`, data: updateProductDto };
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
