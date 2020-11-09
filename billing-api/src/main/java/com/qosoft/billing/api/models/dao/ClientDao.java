package com.qosoft.billing.api.models.dao;

import com.qosoft.billing.api.models.entity.Client;
import org.springframework.data.repository.CrudRepository;

public interface ClientDao extends CrudRepository<Client, Long> {
}
