'use strict';

import createComponentListNode from './componenListNode.js';
import styles from "./styles.js";

(function(){

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

      const template = createComponentListNode()('custom-list');

      // using list object imported from list.js from cdn
      new List(template, this.options, this.values);

      //append container styles
      shadow.appendChild(styles)
      //append container to shadow dom
      shadow.appendChild(template);
    }
  }

  //add the custom component to HTML DOM
  customElements.define('show-lists', CustomList);

})()