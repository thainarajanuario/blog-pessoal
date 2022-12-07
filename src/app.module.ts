import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Postagem } from './Postagem/entities/postagem.entity';
import { PostagemModule } from './Postagem/postagem.module';
import { Tema } from './Tema/entities/tema.entity';
import { TemaModule } from './Tema/tema.module';
import { Usuario } from './Usuario/entities/usuario.entity';
import { UsuarioModule } from './Usuario/usuario.module';


@Module({
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      logging: false,
      dropSchema: false,
      ssl: {
        rejectUnauthorized: false,
      },
      synchronize: true,
      autoLoadEntities: true,
    }),
    PostagemModule,
    TemaModule,
    AuthModule,
    UsuarioModule
  ],

  controllers: [AppController],
  providers: [],
})
export class AppModule { }
