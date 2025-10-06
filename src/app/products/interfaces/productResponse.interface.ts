export interface ProductsResponse {
    productId:    number;
    name:         string;
    description:  string;
    price:        number;
    imgUrl:       string;
    imgUrlLocal:  null;
    sku:          string;
    stock:        number;
    createdAt:    Date;
    updatedAt:    null;
    categoryId:   number;
    categoryName: string;
}
