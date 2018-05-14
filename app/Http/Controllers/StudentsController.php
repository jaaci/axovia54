<?php

namespace App\Http\Controllers;
use App\Http\Requests\BasicRequest;
use Illuminate\Support\Collection;

use Illuminate\Http\Request;
use App\Student;

class StudentsController extends Controller
{
    public function index()
    {
        

        return Student::all();
    }
 
    public function show(Student $student)
    {
        return $student;
    }

}
