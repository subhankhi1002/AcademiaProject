package com.example.demo.Controller;

import com.example.demo.Entities.Employee;
import com.example.demo.Entities.HR;
import com.example.demo.Entities.Model;
import com.example.demo.Entities.Organization;
import com.example.demo.Service.EmployeeService;
//import com.example.demo.Service.HrService;
import com.example.demo.Service.OrganizationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;
    @Autowired
    private OrganizationService organizationService;


    private Model model;


    @PostMapping("/login")
    public String login(@RequestBody Employee employee) {
        Employee loginVal = employeeService.authenticate(employee);
        if(loginVal != null){
            return "Login Successful";
        }else {
            return "Login is not successful";
        }
    }

    @PostMapping("/getUser")
    public Employee getUser(@RequestBody Employee e){
        return employeeService.getUser(e);
}


    @PostMapping("/setOrg")
    public String setOrg(@RequestBody Organization organization) {
        try {
            Organization org = organizationService.setOrg(organization);
            return "Set successfully";
        }
        catch (Exception e){
            return "Can't Set";
        }

    }

    @PostMapping("/updateOrg")
    public Organization updateOrgName(@RequestBody Organization organization) {
        Organization org = organizationService.updateOrg(organization);
        return org;
    }



    @GetMapping("/getOrg")
    public List<Organization> getOrganization(){
        return organizationService.getAll();
    }

    @PostMapping ("/getOrgByOrgId")
    public Organization getOrgByOrgId(@RequestBody Organization organization){
        return organizationService.getOrgByOrgId(organization);
    }

    @PostMapping ("/delOrgByOrgId")
    public String delOrgByOrgId(@RequestBody Organization organization){

        var temp = organizationService.delOrgByOrgId(organization);
        if(temp){
            return "Deleted Successfully";
        }
        else{
            return "Can't Delete";
        }
    }

    @PostMapping("/getAllHrByOrgId")
    public List<HR> getAllHrByOrgId(@RequestBody Organization organization){
        return organizationService.getAllHrByOrgId(organization);
    }

    @PostMapping("/getHrByHrId")
    public HR getHrByHrId(@RequestBody HR hr){
        return organizationService.getHrByHrId(hr);
    }

    @PostMapping("/getOrgByHrId")
    public Organization getOrgByHrId(@RequestBody HR hr){
        return organizationService.getOrgByHrId(hr);
    }

    @PostMapping("/updateHr")
    public HR updateFirstName(@RequestBody HR hr){
        return organizationService.updateHr(hr);
    }




    @PostMapping ("/delHrByHrId")
    public String delHrByHrId(@RequestBody HR hr){

        var temp = organizationService.delHrByHrId(hr);
        if(temp){
            return "Deleted Successfully";
        }
        else{
            return "Can't Delete";
        }
    }

    @PostMapping ("/setHr")
    public String setHrByOrgId(@RequestBody Model model){
        try{
            System.out.println("[Me] First Name: "+model.getFirstName());
            Organization org = organizationService.setHr(model);

            return "Set Successfully!";
        } catch (Exception e){
            System.out.println(e.toString());
            return "Can't Set";
        }
    }

}
