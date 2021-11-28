import { EntityRepository, Repository } from 'typeorm';
import product from '../entities/product';

@EntityRepository(product)
export class ProductRepository extends Repository<product> {
  public async findByName(name: string): Promise<product | undefined> {
    const product = this.findOne({
      where: {
        name,
      },
    });

    return product;
  }
}
