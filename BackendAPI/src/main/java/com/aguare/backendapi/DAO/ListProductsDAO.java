package com.aguare.backendapi.DAO;

import com.aguare.backendapi.Entitys.ListProducts;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;


public interface ListProductsDAO extends CrudRepository<ListProducts, Long>
{
    @Query("SELECT lp.idProduct.idProduct, SUM(lp.quantity) AS total " +
            "FROM ListProducts lp " +
            "GROUP BY lp.idProduct.idProduct " +
            "ORDER BY total DESC LIMIT 10")
    Iterable<Object> findTop10ProductsSold();

    @Query("SELECT lp.idProduct.idProduct, SUM(lp.quantity) AS total FROM ListProducts lp WHERE lp.idBranch = :id GROUP BY lp.idProduct.idProduct ORDER BY total DESC LIMIT 10")
    Iterable<ListProducts> findTop5MoreSaleIdBranch(@Param("id") Long id);

    @Query("SELECT lp.idBranch, lp.idProduct.idProduct, SUM(lp.subtotal) AS total FROM ListProducts lp WHERE lp.idBranch = :idBranch GROUP BY lp.idBranch, lp.idProduct.idProduct ORDER BY total DESC LIMIT 5")
    Iterable<Object> findTop5MoreAvenue(@Param("idBranch") Long id);

}
