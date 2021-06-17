export default function createComponentListNode() {
  const HTMLnode = document.createElement('div');

  return function(classname) {
    HTMLnode.innerHTML = `
      <div id="${classname}">
        <input type="search" class="search" placeholder="normal search">
        <button class="sort" data-sort="name">
          Sort by Name
        </button>
        <button id="getList">
          Fetch List items
        </button>
        <ul class="list"></ul>
      </div>
    `;

    return HTMLnode
  }
}