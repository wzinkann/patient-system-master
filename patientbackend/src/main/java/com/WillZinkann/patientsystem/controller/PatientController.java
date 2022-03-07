package com.WillZinkann.patientsystem.controller;

import com.WillZinkann.patientsystem.model.Patient;
import com.WillZinkann.patientsystem.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/patient")
@CrossOrigin
public class PatientController {
    @Autowired
    private PatientService patientService;

    @PostMapping("/add")
    public String add(@RequestBody Patient patient) {
        patientService.savePatient(patient);
        return "New patient is added";
    }

    @GetMapping("/getAll")
    public List<Patient> list() {
        return patientService.getAllPatients();
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.GET)
    public String delete(@PathVariable("id") int id) {
        patientService.deletePatient(id);
        return "Patient with id " + id + " removed";
    }
}

