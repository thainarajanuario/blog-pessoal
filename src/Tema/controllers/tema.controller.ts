import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";
import { Tema } from "../entities/tema.entity";
import { TemaService } from "../service/tema.service";

@ApiTags('Tema')
@UseGuards(JwtAuthGuard)
@Controller("/tema")
@ApiBearerAuth()
export class TemaController {
   constructor(private readonly temaservice: TemaService) { }

    @Get()
    @HttpCode (HttpStatus.OK)
    findAll(): Promise<Tema[]> {
        return this.temaservice.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findBYId(@Param('id',ParseIntPipe) id: number): Promise<Tema> {
        return this.temaservice.findById(id)

    }

    @Get('/descricao/:descricao')
    @HttpCode(HttpStatus.OK)
    findByDescricao(@Param('descricao') descricao:string): Promise<Tema[]>{
        return this.temaservice.findByDescricao(descricao)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() tema: Tema): Promise<Tema> {
        return this.temaservice.create(tema)
    }



    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() tema: Tema): Promise<Tema> {
        return this.temaservice.update(tema)
    }


    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.temaservice.delete(id)
    }
}