import {Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, Query} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";

@ApiTags('Users')
@Controller('users')
export class UsersController {
    @ApiOperation({
        summary: 'Hola Mundo',
        description: 'Esto es una descripción',
        externalDocs: {description: 'desc2', url: 'http://google.com'}
    })
    @Get()
    @HttpCode(HttpStatus.OK)
    holaMundo(@Query() query: any) {
        return query.name;
    }

    @ApiOperation({
        summary: 'Create User',
        description: 'Esto es una descripción',
        externalDocs: {description: 'desc2', url: 'http://google.com'}
    })
    @Post()
    @HttpCode(HttpStatus.OK)
    post(@Body() payload: any) {
        return payload;
    }

    @ApiOperation({
        summary: 'Update User',
        description: 'Esto es una descripción',
        externalDocs: {description: 'desc2', url: 'http://google.com'}
    })
    @Put(':id')
    @HttpCode(HttpStatus.OK)
    put(@Param('id') id: string, @Body() payload: any) {
        return payload;
    }
}
