import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query} from '@nestjs/common';
import {ApiOperation, ApiTags} from "@nestjs/swagger";

@ApiTags('Users')
@Controller('users')
export class UsersController {
    @ApiOperation({
        summary: 'Hello World',
        description: 'This is a description',
        externalDocs: {description: 'description', url: 'https://google.com'}
    })
    @Get()
    @HttpCode(HttpStatus.OK)
    helloWorld(@Query() query: any) {
        return query.name;
    }

    @ApiOperation({
        summary: 'Find All Users',
        description: 'This is a description',
        externalDocs: {description: 'url', url: 'https://google.com'}
    })
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll() {
        return 'users';
    }

    @ApiOperation({
        summary: 'Find One User',
        description: 'This is a description',
        externalDocs: {description: 'url', url: 'https://google.com'}
    })
    @Get(':id')
    @HttpCode(HttpStatus.OK)
    findOne(@Param('id') id: string) {
        return 'user';
    }

    @ApiOperation({
        summary: 'Create User',
        description: 'This is a description',
        externalDocs: {description: 'description', url: 'https://google.com'}
    })
    @Post()
    @HttpCode(HttpStatus.OK)
    post(@Body() payload: any) {
        return payload;
    }

    @ApiOperation({
        summary: 'Update User',
        description: 'This is a description',
        externalDocs: {description: 'description', url: 'https://google.com'}
    })
    @Put(':id')
    @HttpCode(HttpStatus.OK)
    put(@Param('id') id: string, @Body() payload: any) {
        return payload;
    }

    @ApiOperation({
        summary: 'Delete User',
        description: 'This is a description',
        externalDocs: {description: 'Description', url: 'https://google.com'}
    })
    @Delete(':id')
    @HttpCode(HttpStatus.OK)
    delete(@Param('id') id: string) {
        return id;
    }
}
