import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.setGlobalPrefix('api/v1');

    const documentBuilder = new DocumentBuilder().setTitle('API IGNUG').setDescription('App description').setVersion('3').addBearerAuth().build();

    const document = SwaggerModule.createDocument(app, documentBuilder);

    SwaggerModule.setup('docs', app, document);

    await app.listen(3000);

    const server = app.getHttpServer();

    const router = server._events.request._router;

    const availableRoutes: [] = router.stack
        .map(layer => {
            if (layer.route) {
                return {
                    route: {
                        path: layer.route?.path,
                        method: layer.route?.stack[0].method,
                    },
                };
            }
        })
        .filter(item => item !== undefined);
    console.log(availableRoutes);
}

bootstrap();
