import * as connections from '@/config/connection/connection';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';




/**
 * @export
 * @interface IProductsRequest
 */
export interface IProductsRequest {
    ProductID:Number,
ProductName:String,
SupplierID:Number,
CategoryID:Number,
QuantityPerUnit:String,
UnitPrice:Number,
UnitsInStock:Number,
UnitsOnOrder:Number,
ReorderLevel:Number,
Discontinued:Number,
}

/**
 * @export
 * @interface IProductsModel
 * @extends {Document}
 */
export interface IProductsModel extends Document {
   ProductID:Number,
ProductName:String,
SupplierID:Number,
CategoryID:Number,
QuantityPerUnit:String,
UnitPrice:Number,
UnitsInStock:Number,
UnitsOnOrder:Number,
ReorderLevel:Number,
Discontinued:Number,
}



/**
 * @swagger
 * components:
 *  schemas:
 *    UserSchema:
 *      required:
*        -ProductID
*        -ProductName
*        -SupplierID
*        -CategoryID
*        -QuantityPerUnit
*        -UnitPrice
*        -UnitsInStock
*        -UnitsOnOrder
*        -ReorderLevel
*        -Discontinued

 *      properties:
*        ProductID:
*          type: Number
*        ProductName:
*          type: String
*        SupplierID:
*          type: Number
*        CategoryID:
*          type: Number
*        QuantityPerUnit:
*          type: String
*        UnitPrice:
*          type: Number
*        UnitsInStock:
*          type: Number
*        UnitsOnOrder:
*          type: Number
*        ReorderLevel:
*          type: Number
*        Discontinued:
*          type: Number

 *    Products:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/ProductsSchema'
 */
const ProductsSchema: Schema = new Schema(
    {
       ProductID:Number,
ProductName:String,
SupplierID:Number,
CategoryID:Number,
QuantityPerUnit:String,
UnitPrice:Number,
UnitsInStock:Number,
UnitsOnOrder:Number,
ReorderLevel:Number,
Discontinued:Number,
    },
    {
        collection: 'products',
        versionKey: false,
    }
).pre('save', async function (next: NextFunction): Promise<void> {
    //const products: any = this; // tslint:disable-line

    //do any customization of request on products here like encrypting password before saving
});




export default connections.db.model<IProductsModel>('ProductsModel', ProductsSchema);

