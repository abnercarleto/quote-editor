import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Request } from 'express';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);

  intercept(context: ExecutionContext, next: any): Observable<any> {
    const request = context.getArgByIndex(0) as Request;
    const { method, url } = request;
    const now = Date.now();

    return next.handle().pipe(
      tap(() => {
        const elapsed = Date.now() - now;
        this.logger.log(`${method} ${url} - ${elapsed}ms`);
      }),
    );
  }
}
