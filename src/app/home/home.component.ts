import { Component, OnInit } from '@angular/core';
import { Item } from '../shared/models/item';
import { ItemService } from '../shared/services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /**
   * These are our defaults item lists.
   */
  itemList1: Array<Item> = []
  itemList2: Array<Item> = []

  /**
   * Item list 0 was merged.
   */
  itemList0WasMerged: boolean = false
  /**
   * Resultant merged item list.
   */
  mergedItemList0: Array<Item> = new Array()

  t0: any = null //Time taken to execute first array merge method.
  m0: any = null //Heap (Space, RAM) taken to execute first array merge method.

  /**
   * Item list 1 was merged.
   */
  itemList1WasMerged: boolean = false
  /**
   * Resultant merged item list.
   */  
  mergedItemList1: Array<Item> = new Array()

  t1: any = null //Time taken to execute second array merge method.
  m1: any = null //Heap (Space, RAM) taken to execute second array merge method.

  /**
   * Item list 2 was merged.
   */
  itemList2WasMerged: boolean = false
  /**
   * Resultant merged item list.
   */  
  mergedItemList2: Set<Item> = new Set()

  t2: any = null //Time taken to execute third array merge method.
  m2: any = null //Heap (Space, RAM) taken to execute third array merge method.

  constructor(private itemService: ItemService) { }
  
  /**
   * Let's initiate our item lists. Ideally, this would be laoded
   * from and external source such as our database.
   */
  private initItems(): void{

    this.itemList1 = [
      new Item(1, 'shirt', 10),
      new Item(2, 'pants', 20),
      new Item(2, 'pants', 20),
      new Item(2, 'pants', 20),
      new Item(3, 'shoes', 50),
      new Item(5, 'wallet', 30),
      new Item(5, 'wallet', 30),
      new Item(8, 'belt', 30),
      new Item(9, 'watch', 30)
    ]

    this.itemList2 = [
      new Item(1, 'shirt', 10),
      new Item(2, 'pants', 20),
      new Item(2, 'pants', 20),
      new Item(2, 'pants', 20),
      new Item(3, 'shoes', 50),
      new Item(5, 'wallet', 30),
      new Item(5, 'wallet', 30),
      new Item(8, 'belt', 30),
      new Item(9, 'watch', 30)
    ]

  }

  /**
   * Will merge arrays and return non-duplicate valued merged objects.
   * @param itemLists 
   * @return void
   */
  public mergedItemListsUnion(itemLists: Array<any>): void{
    
    //Let's measure the performance of this method.
    let t0 = performance.now()

    //Will return a mergedItemList
    this.mergedItemList0 = this.itemService.mergedItemListsUnion(itemLists)

    //Let's measure the performance of this method.
    let t1 = performance.now()

    this.t0 = t1 - t0

    //Display our merged Item List in our interface.
    this.itemList0WasMerged = true

  }
  

  /**
   * 
   * @param itemLists 
   * @return void
   */
  public mergeItemListWithLoadDashUnion(itemLists: Array<any>){

    //Let's measure the performance of this method.
    let t0 = performance.now()

    //Will return a mergedItemList wi non-duplicated valued objects.
    this.mergedItemList1 = this.itemService.mergeItemListWithLoadDashUnion(itemLists)

    //Let's measure the performance of this method.
    let t1 = performance.now()

    this.t1 = t1 - t0

    //Display our merged Item List in our interface.
    this.itemList1WasMerged = true

  }

  ngOnInit(): void {  

    this.initItems()

  }

}