import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { LoggerModule } from './core/logger/logger.module';
import { AuthModule } from './features/auth/auth.module';
import { UserProfileModule } from './features/user-profile/user-profile.module';
import { ProductModule } from './features/product/product.module';
import { CartModule } from './features/cart/cart.module';
import { OrderModule } from './features/order/order.module';
import { ReviewModule } from './features/review/review.module';
import databaseConfig from './config/database.config';
import jwtConfig from './config/jwt.config';
import appConfig from './config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [databaseConfig, jwtConfig, appConfig],
    }),
    DatabaseModule,
    LoggerModule,
    AuthModule,
    UserProfileModule,
    ProductModule,
    CartModule,
    OrderModule,
    ReviewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
