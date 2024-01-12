package com.example.demo.Repository;

//import com.example.demo.Entities.Employee;
import com.example.demo.Entities.Employee;
import com.example.demo.Entities.Organization;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.io.Serializable;
import java.util.List;

@Repository
public interface IOrganizationRepository extends JpaRepository<Organization, Serializable> {
    @Query("select o from Organization o")
    List<Organization> getOrganization();

    @Query("select o from Organization o where o.orgId = :orgId")
    Organization getOrganizationByOrgId(@Param("orgId") Integer orgId);


}
