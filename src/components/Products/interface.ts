import { ISearchParamRequest } from '@/utils/SearchHelper';
import { IProductsModel } from './model';

/**
 * @export
 * @interface IProductsService
 */
export interface IProductsService {
    /**
    * @returns {Promise <number>}
    * @memberof ProductsService
    */
    countAll(): Promise<number>;
    
    /**
    * @returns {Promise <number>}
    * @memberof ProductsService
    */
    countSearch(body: ISearchParamRequest): Promise<number>;

    /**
     * @returns {Promise<IProductsModel[]>}
     * @memberof IProductsService
     */
    findAll(pageNo:number,pageSize:number): Promise<IProductsModel[]>;

    /**
     * @param {ISearchParamRequest} param
     * @returns {Promise<IProductsModel[]>}
     * @memberof IProductsService
     */
     search(searchParam:ISearchParamRequest,pageNo:number,pageSize:number): Promise<IProductsModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IProductsModel>}
     * @memberof IProductsService
     */
    findOne(code: string): Promise<IProductsModel>;

    /**
     * @param {IProductsModel} IProductsModel
     * @returns {Promise<IProductsModel>}
     * @memberof IProductsService
     */
    insert(IProductsModel: IProductsModel): Promise<IProductsModel>;

    /**
     * @param {string} id
     * @param {IProductsModel} IProductsModel
     * @returns {Promise<IProductsModel>}
     * @memberof IProductsService
     */
    update(id:string,IProductsModel: IProductsModel): Promise<Number>;

    /**
     * @param {string} id
     * @returns {Promise<IProductsModel>}
     * @memberof IProductsService
     */
    remove(id: string): Promise<IProductsModel>;
}

