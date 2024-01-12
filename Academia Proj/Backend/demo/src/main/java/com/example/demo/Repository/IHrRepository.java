package com.example.demo.Repository;

import com.example.demo.Entities.HR;
import com.example.demo.Entities.Organization;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.io.Serializable;
import java.util.List;


@Repository
public interface IHrRepository extends JpaRepository<HR, Serializable> {

    @Query("select h from HR h")
    List<HR> getHr();

    @Query("select hr from Organization o join HR hr on o.orgId=hr.organization.orgId where o.orgId = :orgId")
    List<HR> getAllHrByOrgId(@Param("orgId") Integer orgId);

    @Query("select hr from HR hr where hr.hrId = :hrId")
    HR getHrByHrId(@Param("hrId") Integer hrId);

    @Query("select o from Organization o join HR hr on o.orgId=hr.organization.orgId where hr.hrId = :hrId")
    Organization getOrgByHrId(@Param("hrId") Integer hrId);


}
