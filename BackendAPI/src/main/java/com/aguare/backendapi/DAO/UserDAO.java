package com.aguare.backendapi.DAO;

import com.aguare.backendapi.Entitys.Employee;
import com.aguare.backendapi.Entitys.User;
import org.springframework.data.repository.CrudRepository;

public interface UserDAO extends CrudRepository<User, String> {
    User findByUsername(String username);
}
