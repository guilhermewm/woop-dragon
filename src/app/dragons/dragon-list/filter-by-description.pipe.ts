import { Pipe, PipeTransform } from '@angular/core';

import { Dragon } from '../dragon/dragon';

@Pipe({ name: 'filterByDescription'})
export class FilterByDescription implements PipeTransform {

    transform(photos: Dragon[], descriptionQuery: string) {
        descriptionQuery = descriptionQuery
            .trim()
            .toLowerCase();

        if(descriptionQuery) {
            return photos.filter(dragon => 
                dragon.name.toLowerCase().includes(descriptionQuery)
            );
        } else {
            return photos;
        }
    }

}