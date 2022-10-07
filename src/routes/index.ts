import * as express from 'express';
import * as http from 'http';
import * as jwtConfig from '@/config/middleware/jwtAuth';
import * as swaggerUi from 'swagger-ui-express';
import AuthRouter from './AuthRouter';
import swaggerJsdoc = require('swagger-jsdoc');
import FileRouter from './FileRouter';
import fileUpload = require('express-fileupload');
import OrdersRouter from './OrdersRouter';
import OrderdetailsRouter from './OrderdetailsRouter';
import EmployeeterritoriesRouter from './EmployeeterritoriesRouter';
import CustomersRouter from './CustomersRouter';
import ProductsRouter from './ProductsRouter';
import NorthwindRouter from './NorthwindRouter';
import ShippersRouter from './ShippersRouter';
import SuppliersRouter from './SuppliersRouter';
import ShopRouter from './ShopRouter';
import CategoriesRouter from './CategoriesRouter';
import TerritoriesRouter from './TerritoriesRouter';
import RegionsRouter from './RegionsRouter';


type NextFunction = express.NextFunction;
type Request = express.Request;
type Response = express.Response;


/**
 * @export
 * @param {express.Application} app
 */
export function init(app: express.Application): void {
    const router: express.Router = express.Router();

    app.use(fileUpload());
    app.use('/v1/orders', jwtConfig.isAuthenticated, OrdersRouter);
app.use('/v1/orderDetails', jwtConfig.isAuthenticated, OrderdetailsRouter);
app.use('/v1/employeeTerritories', jwtConfig.isAuthenticated, EmployeeterritoriesRouter);
app.use('/v1/customers', jwtConfig.isAuthenticated, CustomersRouter);
app.use('/v1/products', jwtConfig.isAuthenticated, ProductsRouter);
app.use('/v1/northwind', jwtConfig.isAuthenticated, NorthwindRouter);
app.use('/v1/shippers', jwtConfig.isAuthenticated, ShippersRouter);
app.use('/v1/suppliers', jwtConfig.isAuthenticated, SuppliersRouter);
app.use('/v1/shop', jwtConfig.isAuthenticated, ShopRouter);
app.use('/v1/categories', jwtConfig.isAuthenticated, CategoriesRouter);
app.use('/v1/territories', jwtConfig.isAuthenticated, TerritoriesRouter);
app.use('/v1/regions', jwtConfig.isAuthenticated, RegionsRouter);


     app.use('/v1/file', jwtConfig.isAuthenticated, FileRouter);
    /**
     * @description Forwards any requests to the /auth URI to our AuthRouter
     * @constructs
     */
    app.use('/auth', AuthRouter);

    const options = {
        definition: {
            openapi: "3.0.0",
            info: {
                title: "NorthwindSample API",
                version: "1.0.0",
                description: "TypeScript, Express, JWT Auth, Mongoose, GetAutomator.com",
                license: {
                    name: "GetAutomator",
                    url: "https://getautomator.com",
                }
            },
            servers: [
                {
                    url: "http://localhost:8484",
                },
            ],
        },
        apis: ['./**/*.ts'],
    };
    const specs = swaggerJsdoc(options);
    app.use(
        "/api-docs",
        swaggerUi.serve,
        swaggerUi.setup(specs, { explorer: true })
    );

    /**
     * @description No results returned mean the object is not found
     * @constructs
     */
    app.use((req: Request, res: Response, next: NextFunction) => {
        res.status(404).send(http.STATUS_CODES[404]);
    });

    /**
     * @constructs all routes
     */
    app.use(router);
}

