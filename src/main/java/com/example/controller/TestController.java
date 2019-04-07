package com.example.controller;

import com.example.repository.StudentRepository;
import com.example.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.Arrays;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:63342")
public class TestController {

    @Autowired
    private StudentRepository studentRepository;

    @PostConstruct
    public void addSampleData(){
        final List list = Arrays.asList(
                new Student(1,"AA",10),
                new Student(2,"AB",11),
                new Student(3,"AC",12),
                new Student(4,"AD",10),
                new Student(5,"AE",11),
                new Student(6,"AF",12),
                new Student(7,"AG",10),
                new Student(8,"AH",11),
                new Student(9,"AI",12),
                new Student(10,"AJ",13));
        studentRepository.saveAll(list);
    }

    @GetMapping(value = "/")
    public List<Student> getResult(){
        return studentRepository.findAll();
    }

    @PutMapping(value = "/{studentId}")
    public void updateStudentDetail(@PathVariable("studentId") final Long studentId, @RequestBody final Student student){
        studentRepository.save(student);
    }

    @DeleteMapping(value = "/{studentId}")
    public void deleteStudent(@PathVariable("studentId") final Integer studentId){
        studentRepository.deleteById(studentId);
    }
}
