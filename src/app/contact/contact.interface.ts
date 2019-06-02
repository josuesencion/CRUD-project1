import { ArrayType } from '@angular/compiler';

export interface Contact{
    name: string;
    lastName: string;
    phones: ArrayType[];
}