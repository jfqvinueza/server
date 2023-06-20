import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { VentasModule } from './modules/ventas/ventas.module';

@Module({
  imports: [ItemsModule, VentasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
