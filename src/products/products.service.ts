import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) { }

  create(product: Partial<Product>) {
    return this.productRepository.save(product);
  }

  getAll() {
    return this.productRepository.find();
  }

  getOne(id: number) {
    return this.productRepository.findOne({ where: { id } });
  }

  update(id: number, product: Partial<Product>) {
    return this.productRepository.update(id, product);
  }

  delete(id: number) {
    return this.productRepository.delete(id);
  }
}
