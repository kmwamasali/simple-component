"use strict";

(function(){
  class CustomList extends HTMLElement {
    constructor(args) {
      super(args);
      //set static list Item
      //TODO: Make Dynamic
      this.listItem = {
        valueNames: ['name', 'born'],
        item: '<li><h3 class="name"></h3><p class="born"></p></li>'
      };
      //set static list values
      this.values = [
        {
          name: 'Tom Boya',
          born: 1986
        },
        {
          name: 'Jane Boya',
          born: 1994
        }
      ];
      // attach shadow dom
      const shadow = this.attachShadow({ mode: 'open' });

      // create List Container
      const listContainer = document.createElement('ul');
      listContainer.classList.add('list');

     //TODO: Attach ListJS component

      //append container ro shadow dom
      shadow.appendChild(listContainer);
    }
  }
  customElements.define('show-lists', CustomList);
})()
