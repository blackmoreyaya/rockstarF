import { Card } from 'src/app/models/card.model';
import { Product } from './product.model';


export class Order {

    constructor(
        public fecha: string,
        public pagoTotal: number,
        public envio: string,
        public status: string,
        public productos: Product[],
        public metodoPago?: Card,
        public paypal?: string,
        public id?: string
    ) { }
}
