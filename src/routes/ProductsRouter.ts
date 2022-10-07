import { Router } from 'express';
import { ProductsComponent } from '@/components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/v1/products
 *
 * @swagger
 * /v1/products:
 *   get:
 *     description: Get all stored products in Database
 *     tags: ["products"]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: An array of products
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/ProductsSchema'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', ProductsComponent.findAll);


/**
 * POST method route
 * @example http://localhost:PORT/v1/products/search
 *
 * @swagger
 * /v1/products/search:
 *   post:
 *      description: Search products
 *      tags: ["products"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: products search request body
 *        required: true
 *        content:
 *          application/json:
 *      responses:
 *        201:
 *          description: return search products
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/ProductsSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
 router.post('/search', ProductsComponent.search);

/**
 * POST method route
 * @example http://localhost:PORT/v1/products
 *
 * @swagger
 * /v1/products:
 *   post:
 *      description: Create new products
 *      tags: ["products"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: products creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ProductsSchema'
 *      responses:
 *        201:
 *          description: return created products
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/ProductsSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', ProductsComponent.create);


/**
 * POST method route
 * @example http://localhost:PORT/v1/products
 *
 * @swagger
 * /v1/products/{id}:
 *   post:
 *      description: Update products
 *      tags: ["products"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: products creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ProductsSchema'
 *      responses:
 *        201:
 *          description: return updated products
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/ProductsSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.patch('/:id', ProductsComponent.update);


/**
 * GET method route
 * @example http://localhost:PORT/v1/products/:id
 *
 * @swagger
 * /v1/products/{id}:
 *  get:
 *    description: Get products by id
 *    tags: ["products"]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the unique id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: return products by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/ProductsSchema'
 */
router.get('/:id', ProductsComponent.findOne);

/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/products/:id
 *
 * @swagger
 * /v1/products/{id}:
 *  delete:
 *    description: Delete products by id
 *    tags: ["products"]
 *    security:
 *      - bearerAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the unique id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: return deleted products
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/ProductsSchema'
 */
router.delete('/:id', ProductsComponent.remove);

/**
 * @export {express.Router}
 */
export default router;

