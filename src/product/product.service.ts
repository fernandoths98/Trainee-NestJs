import { Product } from './models/product.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AbstractService } from 'src/common/abstract.service';

@Injectable()
export class ProductService extends AbstractService{
    constructor (
        @InjectRepository(Product) private readonly productRepository: Repository<Product> 
    ){
        super(productRepository);
    }
}
