import * as Joi from '@hapi/joi';
import CustomersModel, { ICustomersModel } from './model';
import CustomersValidation from './validation';
import { ICustomersService } from './interface';
import { Types } from 'mongoose';
import { GetSearchQuery, ISearchParamRequest } from '@/utils/SearchHelper';

/**
 * @export
 * @implements {ICustomersModelService}
 */
const CustomersService: ICustomersService = {

   /**
   * @returns {Promise <number>}
   * @memberof CustomersService
   */
    async countAll(): Promise<number> {
        try {
            return await CustomersModel.countDocuments({});
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
            return await CustomersModel.countDocuments(query);
        } catch (error) {
            throw new Error(error.message);
        }
    },
    /**
     * @returns {Promise < ICustomersModel[] >}
     * @memberof CustomersService
     */
    async findAll(pageNo:number,pageSize:number): Promise<ICustomersModel[]> {
        try {
            const skip = pageNo * pageSize;
            return await CustomersModel.find({}).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
    * @param {ISearchParamRequest} searchParam
    * @returns {Promise <ICustomersModel[]>}
    * @memberof CustomersService
    */
    async search(body: ISearchParamRequest, pageNo: number, pageSize: number): Promise<ICustomersModel[]> {
        try {
            const validate: Joi.ValidationResult<ISearchParamRequest> = CustomersValidation.searchParams(body);
            if (validate.error) {
                throw new Error(validate.error.message);
            }
            const skip = pageNo * pageSize;
            const query=GetSearchQuery(body);
            return await CustomersModel.find(query).skip(skip).limit(pageSize);
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < ICustomersModel >}
     * @memberof CustomersService
     */
    async findOne(id: string): Promise<ICustomersModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = CustomersValidation.getCustomers({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            return await CustomersModel.findOne(
                {
                    _id: Types.ObjectId(id),
                }
            );
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {ICustomersModel} customers
     * @returns {Promise < ICustomersModel >}
     * @memberof CustomersService
     */
    async insert(body: ICustomersModel): Promise<ICustomersModel> {
        try {
            const validate: Joi.ValidationResult<ICustomersModel> = CustomersValidation.createCustomers(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const customers: ICustomersModel = await CustomersModel.create(body);

            return customers;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @param {ICustomersModel} customers
     * @returns {Promise < ICustomersModel >}
     * @memberof CustomersService
     */
    async update(id:string, body: ICustomersModel): Promise<Number> {
        try {
            const validate: Joi.ValidationResult<ICustomersModel> = CustomersValidation.updateCustomers(body);

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const customers = await CustomersModel.updateOne({_id: Types.ObjectId(id)}, {$set: body});

            return customers.nModified;
        } catch (error) {
            throw new Error(error.message);
        }
    },

    /**
     * @param {string} id
     * @returns {Promise < ICustomersModel >}
     * @memberof CustomersService
     */
    async remove(id: string): Promise<ICustomersModel> {
        try {
            const validate: Joi.ValidationResult<{
                id: string;
            }> = CustomersValidation.removeCustomers({
                id,
            });

            if (validate.error) {
                throw new Error(validate.error.message);
            }

            const customers: ICustomersModel = await CustomersModel.findOneAndRemove({
                _id: Types.ObjectId(id),
            });

            return customers;
        } catch (error) {
            throw new Error(error.message);
        }
    },
};

export default CustomersService;

