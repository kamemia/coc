<?php

namespace App\Http\Controllers;

use App\Models\Evidence;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EvidenceController extends Controller
{

    public function index()
    {
        $evidence = Evidence::all();
        return Inertia::render('Evidence/Index', compact('evidence'));
    }
}
