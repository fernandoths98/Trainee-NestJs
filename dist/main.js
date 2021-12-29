"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const cookieParser = require("cookie-parser");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.use(cookieParser());
    app.enableCors({
        allowedHeaders: 'Content-Type, Accept, Authorization',
        origin: 'http://127.0.0.1:3000',
        credentials: true,
        methods: 'POST,GET,DELETE,PATCH,OPTIONS,PUT',
    });
    await app.listen(3300);
}
bootstrap();
//# sourceMappingURL=main.js.map