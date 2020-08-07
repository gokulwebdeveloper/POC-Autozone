import './Shops.css'
var categoryArray = [];

export const changeStyle = (element) => {
    
    var item = categoryArray.pop();
    if(item != undefined) {
        item.id=''
    }
        
    element.currentTarget.id='subCategoryItem'
    categoryArray.push(element.currentTarget);
    
}