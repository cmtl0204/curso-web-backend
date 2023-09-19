import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {NestExpressApplication} from "@nestjs/platform-express";

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    app.setGlobalPrefix('api/v1');

    const documentBuilder = new DocumentBuilder().setTitle('API IGNUG').setDescription('App description').setVersion('3').addBearerAuth().build();

    const document = SwaggerModule.createDocument(app, documentBuilder);

    SwaggerModule.setup('docs', app, document);

    await app.listen(3000);
}

bootstrap();
