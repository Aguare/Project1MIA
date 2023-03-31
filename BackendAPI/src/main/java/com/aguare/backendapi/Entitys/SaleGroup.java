package com.aguare.backendapi.Entitys;

import java.util.List;

public class SaleGroup {
    private List<ListProducts> listProducts;
    private Sale sale;

    public SaleGroup(List<ListProducts> listProducts, Sale sale) {
        this.listProducts = listProducts;
        this.sale = sale;
    }

    public List<ListProducts> getListProducts() {
        return listProducts;
    }

    public void setListProducts(List<ListProducts> listProducts) {
        this.listProducts = listProducts;
    }

    public Sale getSale() {
        return sale;
    }

    public void setSale(Sale sale) {
        this.sale = sale;
    }
}
