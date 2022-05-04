import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'Search',
    pure : false
})

export class searchStringPipe implements PipeTransform{
    transform(items: any[], filter: any): any {
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => 
            item.Email.toLowerCase().match(filter.toLowerCase())
            || item.FirstName.toLowerCase().match(filter.toLowerCase())
            || item.LastName.toLowerCase().match(filter.toLowerCase())
            || item.MobileNumber.match(filter));
    }
}