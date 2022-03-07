package com.WillZinkann.patientsystem.service;

import com.WillZinkann.patientsystem.model.Patient;

import java.util.List;

public interface PatientService {
    public Patient savePatient(Patient patient);
    public List<Patient> getAllPatients();
}
