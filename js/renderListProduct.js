import { API_URL, PREFIX_PRODUCT} from "./const.js"
import { createCardProduct } from "./createCardProduct.js";
import { catalogList } from "./elements.js";
import { getDataById } from "./getData.js"
import * as data from '../db.js'
// const data = require('../db')

export const renderListProduct = async (category = 'burger') => {
    catalogList.textContent = '';
    const listProduct = data;
    const listCard = listProduct.data.filter(x => x.category == category).map(createCardProduct);
    catalogList.append(...listCard);

}