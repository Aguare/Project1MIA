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

    @Query("SELECT s.nit, SUM(s.total) AS totalRevenue FROM Sale s WHERE s.nit <> 'C/F' GROUP BY s.nit ORDER BY totalRevenue DESC LIMIT 10" )
    Iterable<Object> findTop10CustomersByRevenue();

    @Query("SELECT s.idBranch, SUM(s.idSale) AS totalRevenue FROM Sale s GROUP BY s.idBranch ORDER BY totalRevenue DESC LIMIT 3" )
    Iterable<Object> findTop3BranchesByRevenue();

    @Query("SELECT s.idBranch, SUM(s.total) AS totalIncome FROM Sale s GROUP BY s.idBranch ORDER BY totalIncome DESC LIMIT 3" )
    Iterable<Object> findTop3BranchesByIncome();

    @Query("SELECT s.dpi, SUM(s.idSale) AS totalSales FROM Sale s WHERE s.dpi IS NOT NULL GROUP BY s.dpi ORDER BY totalSales DESC LIMIT 3" )
    Iterable<Object> findTop3EmployeesBySales();

    @Query("SELECT s.dpi, SUM(s.total) AS totalIncome FROM Sale s WHERE s.dpi IS NOT NULL GROUP BY s.dpi ORDER BY totalIncome DESC LIMIT 3")
    Iterable<Object> findTop3EmployeesByIncome();
}
