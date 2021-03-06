<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    public function grades()
    {
       return $this->hasMany(Grades::class, 'id', 'student_id');
    }
}
