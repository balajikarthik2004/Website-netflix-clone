const tabItems = document.querySelectorAll('.tab-item');
const tabcontentItems = document.querySelectorAll(".tab-content-item")

//select tab content item
function selectItem(e){
    removeBorder();
    removeshow();
    //add border to current tab
    this.classList.add('tab-border');
    //grab content item from DOM
    const tabcontentItem = document.querySelector(`#${this.id}-content`)
    //add show class
    tabcontentItem.classList.add('show')
}
function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'))
}
function removeshow(){
    tabcontentItems.forEach(item => item.classList.remove('show'))
}
//listen for tab click
tabItems.forEach(item => item.addEventListener('click',selectItem));