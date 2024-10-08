import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const UsuarioLogado = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.usuario;
  },
);
