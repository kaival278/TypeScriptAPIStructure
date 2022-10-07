import { Router } from 'express';
import { CustomersComponent } from '@/components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/v1/customers
 *
 * @swagger
 * /v1/customers:
 *   get:
 *     description: Get all stored customers in Database
 *     tags: ["customers"]
 *     security:
 *      - bearerAuth: []
 *     responses:
 *       200:
 *         description: An array of customers
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/CustomersSchema'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', CustomersComponent.findAll);


/**
 * POST method route
 * @example http://localhost:PORT/v1/customers/search
 *
 * @swagger
 * /v1/customers/search:
 *   post:
 *      description: Search customers
 *      tags: ["customers"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: customers search request body
 *        required: true
 *        content:
 *          application/json:
 *      responses:
 *        201:
 *          description: return search customers
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/CustomersSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
 router.post('/search', CustomersComponent.search);

/**
 * POST method route
 * @example http://localhost:PORT/v1/customers
 *
 * @swagger
 * /v1/customers:
 *   post:
 *      description: Create new customers
 *      tags: ["customers"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: customers creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CustomersSchema'
 *      responses:
 *        201:
 *          description: return created customers
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/CustomersSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', CustomersComponent.create);


/**
 * POST method route
 * @example http://localhost:PORT/v1/customers
 *
 * @swagger
 * /v1/customers/{id}:
 *   post:
 *      description: Update customers
 *      tags: ["customers"]
 *      security:
 *       - bearerAuth: []
 *      requestBody:
 *        description: customers creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CustomersSchema'
 *      responses:
 *        201:
 *          description: return updated customers
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/CustomersSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.patch('/:id', CustomersComponent.update);


/**
 * GET method route
 * @example http://localhost:PORT/v1/customers/:id
 *
 * @swagger
 * /v1/customers/{id}:
 *  get:
 *    description: Get customers by id
 *    tags: ["customers"]
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
 *        description: return customers by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/CustomersSchema'
 */
router.get('/:id', CustomersComponent.findOne);

/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/customers/:id
 *
 * @swagger
 * /v1/customers/{id}:
 *  delete:
 *    description: Delete customers by id
 *    tags: ["customers"]
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
 *        description: return deleted customers
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/CustomersSchema'
 */
router.delete('/:id', CustomersComponent.remove);

/**
 * @export {express.Router}
 */
export default router;

