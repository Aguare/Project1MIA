package com.aguare.backendapi.DAO;

import com.aguare.backendapi.Entitys.Client;
import org.springframework.data.repository.CrudRepository;

public interface ClientDAO extends CrudRepository<Client, String> {
}
