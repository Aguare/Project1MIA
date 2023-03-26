package com.aguare.backendapi.DAO;

import com.aguare.backendapi.Entitys.Branch;
import org.springframework.data.repository.CrudRepository;

public interface BranchDAO extends CrudRepository<Branch, Long> {
}
