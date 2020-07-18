import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class YupValidationPipe implements PipeTransform {
    transform(value: any, { metatype }: ArgumentMetadata): Promise<any>;
}
