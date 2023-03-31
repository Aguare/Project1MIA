package com.aguare.backendapi.DAO;

import com.aguare.backendapi.Entitys.ListProducts;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

public interface ListProductsDAO extends CrudRepository<ListProducts, Long>
{
    @Query("SELECT s.idProduct, SUM(s.quantity) AS TOTAL FROM ListProducts s GROUP BY s.idProduct ORDER BY TOTAL DESC LIMIT 10")
    Iterable<ListProducts> report1();
}
