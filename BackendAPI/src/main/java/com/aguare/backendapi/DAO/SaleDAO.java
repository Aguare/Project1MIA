package com.aguare.backendapi.DAO;

import com.aguare.backendapi.Entitys.Sale;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface SaleDAO extends CrudRepository<Sale, Long> {

    @Query("SELECT s FROM Sale s WHERE s.nit = :nit AND s.nit <> 'C/F' ORDER BY s.idSale DESC LIMIT 1" )
    Sale getLastSaleByNit(@Param("nit") String nit);

    @Query("SELECT s.idSale FROM Sale s ORDER BY s.date DESC LIMIT 1" )
    Long getIdLastSale();

}
