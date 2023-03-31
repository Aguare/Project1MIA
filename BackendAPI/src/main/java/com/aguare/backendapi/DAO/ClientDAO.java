package com.aguare.backendapi.DAO;

import com.aguare.backendapi.Entitys.Client;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface ClientDAO extends CrudRepository<Client, String> {

    @Query("SELECT c FROM Client c WHERE c.nit LIKE %:nit% AND NOT c.nit = 'C/F'")
    Iterable<Client> findByNitLike(@Param("nit") String nit);
}
