package com.aguare.backendapi.DAO;

import com.aguare.backendapi.Entitys.Employee;
import org.springframework.data.repository.CrudRepository;

public interface EmployeeDAO extends CrudRepository<Employee, String> {
}
