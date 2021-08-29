import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  /**
   * Will merge item lists using Union and Set.
   * @param itemLists 
   * @returns Array<Item> mergedItemList of non-duplicate-valued objects
   */
  public mergedItemListsUnion(itemLists: Array<Array<Item>>): Array<Item>{

    let mergedItemList: Array<Item> = new Array()

    itemLists.forEach(itemList => {

      itemList.forEach(item => {
        mergedItemList.push(item)
      })

    })
    
    let set = new Set()
    
    let unionArray = mergedItemList.filter(item => {

      if ( !set.has(item.id) && !set.has(item.name) && !set.has(item.price) ) {
        set.add(item.id)
        return true
      }
    
      return false
    
    }, set)

    return unionArray

  }

  /**
   * Will return a merged array of non-duplicate valued objects using the loadash utility library.
   * @param itemLists 
   * @returns mergedItemList of non-duplicate-valued objects
   */
  mergeItemListWithLoadDashUnion(itemLists: Array<Array<Item>>): Array<Item>{

    let mergedItemList: Array<Item> = new Array()
    
    itemLists.forEach(itemList => {

      itemList.forEach(item => {
        mergedItemList.push(item)
      })

    })
    
    //Let's use .uniqBy from the lodash JavaScript Library
    mergedItemList = _.uniqBy(mergedItemList, (elem) => {
      return JSON.stringify(_.pick(elem, ['id', 'name', 'price']))
    })

    return mergedItemList

  }

}

