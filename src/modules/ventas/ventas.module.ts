import { Global, Module } from '@nestjs/common';
import { ventasProviders } from './products/providers/ventas.providers';
import { VentasService } from './services/ventas.service';



@Global()
@Module({
    imports: [DataBaseModule],
    controllers: [],
    providers: [...ventasProviders, VentasService],
})
export class VentasModule { }
