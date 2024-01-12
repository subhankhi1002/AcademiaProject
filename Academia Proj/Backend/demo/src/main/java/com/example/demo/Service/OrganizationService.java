package com.example.demo.Service;

//import com.example.demo.Entities.Employee;
import com.example.demo.Entities.HR;
import com.example.demo.Entities.Model;
import com.example.demo.Entities.Organization;
import com.example.demo.Repository.IEmployeeRepository;
import com.example.demo.Repository.IHrRepository;
import com.example.demo.Repository.IOrganizationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrganizationService {

    @Autowired
    private IOrganizationRepository iSetRepository;

    @Autowired
    private IHrRepository iSetRep;

    public Organization setOrg(Organization o) {
        Organization org = new Organization();
        org.setAddress(o.getAddress());
        org.setName(o.getName());

        return iSetRepository.saveAndFlush(org);
        }

    public Organization updateOrg(Organization o) {

        Organization org =  iSetRepository.getOrganizationByOrgId(o.getOrgId());
        o.setName(o.getName());
        org.setAddress(o.getAddress());

        return iSetRepository.saveAndFlush(o);
    }



    public List<Organization> getAll() {
        return iSetRepository.getOrganization();
    }

    public Organization getOrgByOrgId(Organization organization) {
        try {
            return iSetRepository.getOrganizationByOrgId(organization.getOrgId());

        } catch (Exception e) {
            e.printStackTrace();
        }
        Organization org =  iSetRepository.getOrganizationByOrgId(organization.getOrgId());
        return iSetRepository.saveAndFlush(org);
    }


    public boolean  delOrgByOrgId(Organization organization) {
        var check = false;
        try {
            iSetRepository.deleteById(organization.getOrgId());
            check = true;
        } catch (Exception e) {
            e.printStackTrace();
            check = false;
        }
        return check;
    }






    public List<HR> getHr() {
        return iSetRep.getHr();
    }

    public List<HR> getAllHrByOrgId(Organization organization) {
        try {
            return iSetRep.getAllHrByOrgId(organization.getOrgId());

        } catch (Exception e) {
            e.printStackTrace();
        }
        return iSetRep.getAllHrByOrgId(organization.getOrgId());
    }

    public HR getHrByHrId(HR hr){
        try{
            return iSetRep.getHrByHrId(hr.getHrId());
        }
        catch (Exception e){
            e.printStackTrace();
        }
        return iSetRep.getHrByHrId(hr.getHrId());
    }

    public Organization getOrgByHrId(HR hr){
        try{
            Organization org = iSetRep.getOrgByHrId(hr.getHrId());
            return org;
        }
        catch (Exception e){
            e.printStackTrace();
        }
        return iSetRep.getOrgByHrId(hr.getHrId());
    }






    public HR updateHr(HR hr){
        HR h =  iSetRep.getHrByHrId(hr.getHrId());
        h.setFirstName(h.getFirstName());
        h.setLastName(h.getLastName());
        h.setEmail(h.getEmail());
        h.setPhone(h.getPhone());
        return iSetRep.saveAndFlush(h);
    }

    public Organization setHr (Model model){
       var orgId = model.getOrgId();
        var firstName = model.getFirstName();
        var lastName = model.getLastName();
        var phone = model.getPhone();
        var email= model.getEmail();
        var list = model.getHrs();
        var hrId = model.getHrId();
        var name = model.getName();
        var address = model.getAddress();

        HR hr = new HR();
        hr.setFirstName(firstName);
        hr.setLastName(lastName);
        hr.setEmail(email);
        hr.setPhone(phone);
        hr.setHrId(hrId);

        System.out.println(list);
        list.add(hr);
        System.out.println(list);
       Organization org = new Organization();
       org.setOrgId(orgId);
        hr.setOrganization(org);
        HR h_r = iSetRep.saveAndFlush(hr);

        org.setName(name);
       org.setAddress(address);
       org.setHrs(list);
        //System.out.println(org.getHrs());
       return iSetRepository.saveAndFlush(org);



        //return org;
    }

    public boolean  delHrByHrId(HR hr) {
        var check = false;
        try {
            iSetRep.deleteById(hr.getHrId());
            check = true;
        } catch (Exception e) {
            e.printStackTrace();
            check = false;
        }
        return check;
    }



}




