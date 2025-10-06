import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '@env/environment.development';

const baseUrl = environment.baseUrl;
@Pipe({
    name: 'productImage'
})

export class ProductImagePipe implements PipeTransform {
    transform(value: string | string[]): string {
        if(typeof value === 'string'){
            return `${baseUrl}/wwwroot/ProductImages/${value}`
        }
        const image = value.at(0);
        if(!image){
            return '/assets/images/no-image.jpg';
        }
        return `${baseUrl}/wwwroot/ProductImages/${image}`
    }
}