import { Category } from './category.model';
import { Image } from './image.model';

export class Product {

    constructor(
        public nombre: string,
        public precio: number,
        public descripcion?: string,
        public categoria?: Category,
        public imagen?: Image[],
        public wishlist?: boolean,
        public ranking?: number,
        public maxStock?: number,
        public id?: string
    ) { }
}


// Nombre del producto
// Descripción
// Color
// Material
// Talla
// Peso
// Precio
// Descuento
// Categoría a la que pertenece
// Venta(este campo sirve para saber si el producto se mostrará en la vista principal si es de los más vendidos)
// Marca
// Valoración(5 estrellas por default )
// Imágenes(3 - 4 una principal y las demás para referencia)
// Total de unidades
