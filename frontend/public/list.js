'use strict';

(function(){

  const template = document.createElement('div');
  
  template.innerHTML = `
    <div id="custom-list">
    <input type="search" class="search" placeholder="normal search">
      <ul class="list">
        <li>
          <h3 class="name">Jonny</h3>
          <p class="city">Stockholm</p>
        </li>
        <li>
          <h3 class="name">Jonas</h3>
          <p class="city">Berlin</p>
        </li>
      </ul>
    </div>
  `;

  class CustomList extends HTMLElement {
    constructor(args) {
      super(args);
      //set static list Item
      //TODO: Make Dynamic
      this.options = {
        valueNames: ['name', 'city'],
      };
      // attach shadow dom
      const shadow = this.attachShadow({ mode: 'open' });

      //append container to shadow dom
      shadow.appendChild(template);

      if (template.isConnected) {
        let templateList = new List('custom-list', this.options);
        templateList.add({ name: 'kevin', city: 'kampala' });
      }
    }
  }
  customElements.define('show-lists', CustomList);
})()
