"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const fs_1 = require("fs");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const dbFile = 'db.sqlite';
    if ((0, fs_1.existsSync)(dbFile))
        (0, fs_1.unlinkSync)(dbFile);
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map