import { Product } from './models/product.entity';
import { Repository } from 'typeorm';
import { AbstractService } from 'src/common/abstract.service';
export declare class ProductService extends AbstractService {
    private readonly productRepository;
    constructor(productRepository: Repository<Product>);
}
