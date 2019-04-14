package com.example.controller;

import com.example.repository.StudentRepository;
import com.example.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.Arrays;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TestController {

    @Autowired
    private StudentRepository studentRepository;

    @PostConstruct
    public void addSampleData(){
        final List list = Arrays.asList(
                new Student(1,"Aakash",10),
                new Student(2,"Arnab",11),
                new Student(3,"Alka",12),
                new Student(4,"Anshul",10),
                new Student(5,"Rajul",11),
                new Student(6,"Abhay",12));
        studentRepository.saveAll(list);
    }

    @GetMapping(value = "/")
    public List<Student> getResult(){
        return studentRepository.findAll();
    }

    @GetMapping(value = "/{studentId}")
    public Student getStudentById(@PathVariable("studentId") final Integer studentId){
        return studentRepository.findById(studentId).get();
    }

    @PostMapping(value = "/")
    public void addStudent(@RequestBody final Student student){
        studentRepository.save(student);
    }

    @PutMapping(value = "/{studentId}")
    public void updateStudentDetail(@PathVariable("studentId") final Integer studentId, @RequestBody final Student student){
        Student oldStudent = studentRepository.findById(studentId).get();
        oldStudent.setName(student.getName());
        oldStudent.setAge(student.getAge());
        studentRepository.save(oldStudent);
    }

    @DeleteMapping(value = "/{studentId}")
    public void deleteStudent(@PathVariable("studentId") final Integer studentId){
        studentRepository.deleteById(studentId);
    }
}
