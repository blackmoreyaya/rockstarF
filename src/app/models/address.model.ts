export class Address {

    constructor(
        public nombre: string,
        public calle: string,
        public colonia: string,
        public municipio: string,
        public ciudad: string,
        public estado: string,
        public cp: string,
        public tel: string,
        public referencia?: string,
        public id?: string
    ) { }

}
