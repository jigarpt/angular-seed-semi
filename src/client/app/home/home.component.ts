import { TostrService } from './../shared/common/tostr.service';
import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/name-list/name-list.service';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {
  search: string = '';
  newName: string = '';
  errorMessage: string;
  names: any[] = [];

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public nameListService: NameListService
  , private tostr: TostrService) {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.getNames();
  }

  /**
   * Handle the nameListService observable
   */
  getNames() {
    this.nameListService.get()
      .subscribe(
        names => this.names = <any[]>names.data,
        error => this.errorMessage = <any>error
      );
  }

  /**
   * Pushes a new name onto the names array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    // TODO: implement nameListService.post
    this.names.push(this.newName);
    this.tostr.success(this.newName + ' added successfully.');
    this.newName = '';
    return false;
  }

}
