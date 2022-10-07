import * as Joi from '@hapi/joi';
import ProductsModel, { IProductsModel } from './model';
import ProductsValidation from './validation';
import { IProductsService } from './interface';
import { Types } from 'mongoose';
import { GetSearchQuery, ISearchParamRequest } from '@/utils/SearchHelper';

/**
 * @export
 * @implements {IProductsModelService}
 */
const ProductsService: IProductsService = {

   /**
   * @returns {Promise <number>}
   * @memberof ProductsService
   */
    async countAll(): Promise<number> {
        try {
            return await ProductsModel.countDocuments({});
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @returns {Promise <number>}
     * @memberof ProductsService
     */
    async countSearch(body: ISearchParamRequest): Promise<number> {
        try {
            const query = GetSearchQuery(body);
            return await ProductsModel.countDocuments(query);
        } catch (error) {
            throw new Error(error.message);
        }
    },
    /**
     * @returns {Promise < IProductsModel[] >}
     * @memberof ProductsService
     */
    async findAll(pageNo:number,pageSize:number): Promise<IProductsModel[]> {
        try {
            const skip = pageNo * pageSize;
            return await ProductsModel.find({}).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
    * @param {ISearchParamRequest} searchParam
    * @returns {Promise <IProductsModel[]>}
    * @memberof ProductsService
    */
    async search(body: ISearchParamRequest, pageNo: number, pageSize: number): Promise<IProductsModel[]> {
        try {
            const validate: Joi.ValidationResult<ISearchParamRequest> = ProductsValidation.searchParams(body);
            if (validate.error) {
                throw new Error(validate.error.message);
            }
            const skip = pageNo * pageSize;
            const query=GetSearchQuery(body);
            return await ProductsModel.find(query).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IProductsModel >}
     * @memberof ProductsService
     */
    async findOne(id: string): Promise<IProductsModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = ProductsValidation.getProducts({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await ProductsModel.findOne(
                {
                    _id: Types.ObjectId(id),
                }
            );
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {IProductsModel} products
     * @returns {Promise < IProductsModel >}
     * @memberof ProductsService
     */
    async insert(body: IProductsModel): Promise<IProductsModel> {
        try {
            const validate: Joi.ValidationResult<IProductsModel> = ProductsValidation.createProducts(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const products: IProductsModel = await ProductsModel.create(body);

            return products;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @param {IProductsModel} products
     * @returns {Promise < IProductsModel >}
     * @memberof ProductsService
     */
    async update(id:string, body: IProductsModel): Promise<Number> {
        try {
            const validate: Joi.ValidationResult<IProductsModel> = ProductsValidation.updateProducts(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const products = await ProductsModel.updateOne({_id: Types.ObjectId(id)}, {$set: body});

            return products.nModified;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < IProductsModel >}
     * @memberof ProductsService
     */
    async remove(id: string): Promise<IProductsModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = ProductsValidation.removeProducts({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const products: IProductsModel = await ProductsModel.findOneAndRemove({
                _id: Types.ObjectId(id),
            });

            return products;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

export default ProductsService;

