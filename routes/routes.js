const express = require('express')
const router = express.Router()

const {getResevas,
    getReservaId,
    postReservas,
    actuarlizarReserva,
    borrarReserva,
    filtroReservas,
   } = require('../controllers/controllers')

//--- Son las mismas rutas, solo que sin la documentación de abajo.
// router.post('/', postReservas)
// router.get('/', getResevas )
// router.get('/filtrar', filtroReservas)
// router.get('/:id', getReservaId)
// router.put('/:id', actuarlizarReserva)
// router.delete('/:id', borrarReserva)

/**
 * @swagger
 * components:
 *   schemas:
 *     Reserva:
 *       type: object
 *       required:
 *        - id 
 *        - nombre
 *        - hotel
 *        - correo
 *        - habitacion
 *        - fechaentrada
 *        - fechasalida
 *       properties:
 *         id: 
 *           type: number
 *         nombre: 
 *           type: string
 *         hotel: 
 *           type: string
 *         habitacion: 
 *           type: string
 *         fechaentrada: 
 *           type: string
 *         fechasalida: 
 *           type: string
 *       example:
 *          id: 1
 *          nombre: CheloConsuelo
 *          hotel: El Marquéz
 *          correo: chelo@gmail.com
 *          habitacion: 12345
 *          fechaentrada: 15-05-2023
 *          fechasalida: 16-10-2023
 * 
 */


/**
 * @swagger
 * /api/reservas:
 *  post:
 *    summary: Create a new order
 *    tags: [Reserva]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Reserva'
 *    responses:
 *      200:
 *        description: Reserva enviada
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Reserva'
 */
router.post('/', postReservas)

/**
 * @swagger
 * /api/reservas:
 *  get:
 *    summary: Get a list of all orders
 *    tags: [Reserva]
 *    responses:
 *      200:
 *        description: A list of orders
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Reserva'
 */
router.get('/', getResevas )

/**
 * @swagger
 * /api/reservas/filtrar:
 *  get:
 *    summary: Search orders with filters
 *    tags: [Reserva]
 *    parameters:
 *      - in: query
 *        name: name
 *        schema:
 *          type: string
 *        description: The name of the ordered item
 *    responses:
 *      200:
 *        description: A list of orders that match the filters
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Reserva'
 *      404:
 *        description: Order not found
 */

router.get('/filtrar', filtroReservas)
/**
 * @swagger
 * /api/reservas/{id}:
 *  get:
 *    summary: Get information of a specific order
 *    tags: [Reserva]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: The order's unique identifier
 *    responses:
 *      200:
 *        description: Information of the specific order
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Reserva'
 *      404:
 *        description: Order not found
 */
router.get('/:id', getReservaId)
/**
 * @swagger
 * /api/reservas/{id}:
 *  put:
 *    summary: Update information of a specific order
 *    tags: [Reserva]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: The order's unique identifier
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Reserva'
 *    responses:
 *      200:
 *        description: Order updated successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Reserva'
 */
router.put('/:id', actuarlizarReserva)

/**
 * @swagger
 * /api/reservas/{id}:
 *  delete:
 *    summary: Delete a specific order
 *    tags: [Reserva]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: The order's unique identifier
 *    responses:
 *      200:
 *        description: Order deleted successfully
 *      404:
 *        description: Order not found
 */
router.delete('/:id', borrarReserva)

module.exports = router