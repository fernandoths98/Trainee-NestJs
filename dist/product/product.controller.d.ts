import { ProductUpdateDto } from './models/product-update.dto';
import { ProductService } from './product.service';
import { ProductCreatedDto } from './models/product-created.dto';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    all(page?: number): Promise<import("../common/paginated-result.interface").PaginatedResult>;
    create(body: ProductCreatedDto): Promise<any>;
    get(id: number): Promise<any>;
    update(id: number, body: ProductUpdateDto): Promise<any>;
    delete(id: number): Promise<any>;
}
