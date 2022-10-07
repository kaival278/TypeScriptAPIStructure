import * as Joi from '@hapi/joi';
import Validation from '@/components/validation';
import { IProductsModel } from './model';
import { ISearchParamRequest } from '@/utils/SearchHelper';
/**
 * @export
 * @class ProductsValidation
 * @extends Validation
 */
class ProductsValidation extends Validation {
    /**
     * Creates an instance of ProductsValidation.
     * @memberof ProductsValidation
     */
    constructor() {
        super();
    }

    /**
     * @param {IProductsModel} params
     * @returns {Joi.ValidationResult<IProductsModel >}
     * @memberof ProductsValidation
     */
    createProducts(params: IProductsModel): Joi.ValidationResult<IProductsModel> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
            ProductID:Joi.number(),
ProductName:Joi.string(),
SupplierID:Joi.number(),
CategoryID:Joi.number(),
QuantityPerUnit:Joi.string(),
UnitPrice:Joi.number(),
UnitsInStock:Joi.number(),
UnitsOnOrder:Joi.number(),
ReorderLevel:Joi.number(),
Discontinued:Joi.number(),

        });

        return schema.validate(params);
    }

     /**
     * @param {{ id: string }} body
     * @param {IProductsModel} params
     * @returns {Joi.ValidationResult<IProductsModel >}
     * @memberof ProductsValidation
     */
         updateProducts(params: IProductsModel): Joi.ValidationResult<IProductsModel> {
            const schema: Joi.ObjectSchema = Joi.object().keys({
                ProductID:Joi.number(),
ProductName:Joi.string(),
SupplierID:Joi.number(),
CategoryID:Joi.number(),
QuantityPerUnit:Joi.string(),
UnitPrice:Joi.number(),
UnitsInStock:Joi.number(),
UnitsOnOrder:Joi.number(),
ReorderLevel:Joi.number(),
Discontinued:Joi.number(),

            });
    
            return schema.validate(params);
        }
    
     /**
     * @param {ISearchParamRequest} params
     * @returns {Joi.ValidationResult<ISearchParamRequest >}
     * @memberof ProductsValidation
     */
      searchParams(params: ISearchParamRequest): Joi.ValidationResult<ISearchParamRequest> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
            orAnd: Joi.string().required(),
            params: Joi.array().required()

        });

        return schema.validate(params);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof ProductsValidation
     */
    getProducts(body: {
        id: string;
    }): Joi.ValidationResult<{
        id: string;
    }> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });

        return schema.validate(body);
    }

    /**
     * @param {{ id: string }} body
     * @returns {Joi.ValidationResult<{ id: string }>}
     * @memberof ProductsValidation
     */
    removeProducts(body: {
        id: string;
    }): Joi.ValidationResult<{
        id: string;
    }> {
        const schema: Joi.ObjectSchema = Joi.object().keys({
            id: this.customJoi.objectId().required(),
        });

        return schema.validate(body);
    }
}

export default new ProductsValidation();

