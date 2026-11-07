<?php

use App\Http\Controllers\EvidenceController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');
// Route::get('/', function(){
//     return view('home');
// });

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
    Route::get('evidence', [EvidenceController::class, 'index'])->name('evidence');
    Route::inertia('roles', 'roles')->name('roles');
});

require __DIR__.'/settings.php';
