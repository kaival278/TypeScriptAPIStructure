import * as connections from '@/config/connection/connection';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';




/**
 * @export
 * @interface ICustomersRequest
 */
export interface ICustomersRequest {
    CustomerID:String,
CompanyName:String,
ContactName:String,
ContactTitle:String,
Address:String,
City:String,
Region:String,
PostalCode:Number,
Country:String,
Phone:String,
Fax:String,
}

/**
 * @export
 * @interface ICustomersModel
 * @extends {Document}
 */
export interface ICustomersModel extends Document {
   CustomerID:String,
CompanyName:String,
ContactName:String,
ContactTitle:String,
Address:String,
City:String,
Region:String,
PostalCode:Number,
Country:String,
Phone:String,
Fax:String,
}



/**
 * @swagger
 * components:
 *  schemas:
 *    UserSchema:
 *      required:
*        -CustomerID
*        -CompanyName
*        -ContactName
*        -ContactTitle
*        -Address
*        -City
*        -Region
*        -PostalCode
*        -Country
*        -Phone
*        -Fax

 *      properties:
*        CustomerID:
*          type: String
*        CompanyName:
*          type: String
*        ContactName:
*          type: String
*        ContactTitle:
*          type: String
*        Address:
*          type: String
*        City:
*          type: String
*        Region:
*          type: String
*        PostalCode:
*          type: Number
*        Country:
*          type: String
*        Phone:
*          type: String
*        Fax:
*          type: String

 *    Customers:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/CustomersSchema'
 */
const CustomersSchema: Schema = new Schema(
    {
       CustomerID:String,
CompanyName:String,
ContactName:String,
ContactTitle:String,
Address:String,
City:String,
Region:String,
PostalCode:Number,
Country:String,
Phone:String,
Fax:String,
    },
    {
        collection: 'customers',
        versionKey: false,
    }
).pre('save', async function (next: NextFunction): Promise<void> {
    //const customers: any = this; // tslint:disable-line

    //do any customization of request on customers here like encrypting password before saving
});




export default connections.db.model<ICustomersModel>('CustomersModel', CustomersSchema);

