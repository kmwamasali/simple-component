let styles = document.createElement('style');
styles.textContent = `
  #custom-list {
    width: 80%;
    margin:5% auto; 
  }
  .list {
    font-family:sans-serif;
    margin:0;
    padding:20px 0 0;
  }
  .list > li {
    display:block;
    background-color: #eee;
    padding:10px;
    box-shadow: inset 0 1px 0 #fff;
  }
  h3 {
    font-size: 16px;
    margin:0 0 0.3rem;
    font-weight: normal;
    font-weight:bold;
  }
  p {
    margin:0;
  }
  
  input {
    border:solid 1px #ccc;
    border-radius: 5px;
    padding:7px 14px;
    margin-bottom:10px
  }
  input:focus {
    outline:none;
    border-color:#aaa;
  }
  .sort {
    padding:8px 30px;
    border-radius: 6px;
    border:none;
    display:inline-block;
    color:#fff;
    text-decoration: none;
    background-color: #28a8e0;
    height:30px;
  }
  .sort:hover {
    text-decoration: none;
    background-color:#1b8aba;
  }
  .sort:focus {
    outline:none;
  }
  .sort:after {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid transparent;
    content:"";
    position: relative;
    top:-10px;
    right:-5px;
  }
  .sort.asc:after {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #fff;
    content:"";
    position: relative;
    top:13px;
    right:-5px;
  }
  .sort.desc:after {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #fff;
    content:"";
    position: relative;
    top:-10px;
    right:-5px;
  }
`;

export default styles;