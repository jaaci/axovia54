<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Grades extends Model
{
    
    public function student() {
        return $this->belongsTo('Student');
    }
}
