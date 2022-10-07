import { ISearchParamRequest } from '@/utils/SearchHelper';
import { ICustomersModel } from './model';

/**
 * @export
 * @interface ICustomersService
 */
export interface ICustomersService {
    /**
    * @returns {Promise <number>}
    * @memberof CustomersService
    */
    countAll(): Promise<number>;
    
    /**
    * @returns {Promise <number>}
    * @memberof CustomersService
    */
    countSearch(body: ISearchParamRequest): Promise<number>;

    /**
     * @returns {Promise<ICustomersModel[]>}
     * @memberof ICustomersService
     */
    findAll(pageNo:number,pageSize:number): Promise<ICustomersModel[]>;

    /**
     * @param {ISearchParamRequest} param
     * @returns {Promise<ICustomersModel[]>}
     * @memberof ICustomersService
     */
     search(searchParam:ISearchParamRequest,pageNo:number,pageSize:number): Promise<ICustomersModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<ICustomersModel>}
     * @memberof ICustomersService
     */
    findOne(code: string): Promise<ICustomersModel>;

    /**
     * @param {ICustomersModel} ICustomersModel
     * @returns {Promise<ICustomersModel>}
     * @memberof ICustomersService
     */
    insert(ICustomersModel: ICustomersModel): Promise<ICustomersModel>;

    /**
     * @param {string} id
     * @param {ICustomersModel} ICustomersModel
     * @returns {Promise<ICustomersModel>}
     * @memberof ICustomersService
     */
    update(id:string,ICustomersModel: ICustomersModel): Promise<Number>;

    /**
     * @param {string} id
     * @returns {Promise<ICustomersModel>}
     * @memberof ICustomersService
     */
    remove(id: string): Promise<ICustomersModel>;
}

