'use strict';

(function(){

  function createListNode(classname) {
    const HTMLnode = document.createElement('div');
  
    HTMLnode.innerHTML = `
      <div id="${classname}">
        <input type="search" class="search" placeholder="normal search">
        <button class="sort" data-sort="name">
          Sort by Name
        </button>
        <ul class="list"></ul>
      </div>
    `;

    return HTMLnode
  }

  class CustomList extends HTMLElement {
    constructor(args) {
      super(args);
      // array of list items
      this.values =  [
        { name: 'kevin', city: 'kampala' },
        { name: 'Jonny', city: 'Stockholm' },
        { name: 'Jonas', city: 'Berlin' }
      ]
      //set list options and DOM item
      this.options = {
        valueNames: ['name', 'city'],
        item: '<li><h3 class="name"></h3><p class="city"></p></li>'
      };
      // attach shadow dom
      const shadow = this.attachShadow({ mode: 'open' });

      const template = createListNode('custom-list');

      // using list object imported from list.js from cdn
      new List(template, this.options, this.values);

      //append container to shadow dom
      shadow.appendChild(template);
    }
  }
  customElements.define('show-lists', CustomList);
})()
