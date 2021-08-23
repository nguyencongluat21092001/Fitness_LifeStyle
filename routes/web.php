<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/','HomeController@index');
Route::get('/trang-chu','App\Http\Controllers\HomeController@index');
Route::get('/blog', function () {
    return view('front.blog');
});
Route::get('/gallery', function () {
    return view('front.gallery');
});
Route::get('/contact', function () {
    return view('front.contact');
});
Route::get('/trainer', function () {
    return view('front.trainer');
});
Route::get('/pricing', function () {
    return view('front.pricing');
});
Route::get('/dashboard-product', function () {
    return view('front.Admin.dashboard');
});

// dashboard
Route::get('/dashboard_category', function () {
    return view('front.Admin.dashboard');
});
Route::get('/dashboard_manager', function () {
    return view('front.Admin.dashboard_manager');
});
Route::get('/dashboard_management', function () {
    return view('front.Admin.dashboard_management');
});

// backend
Route::get('/admin','App\Http\Controllers\AdminController@index');
Route::get('/dashboard','App\Http\Controllers\AdminController@show_dashboard');
Route::get('/logout','App\Http\Controllers\AdminController@logout');
Route::post('/admin-dashboard','App\Http\Controllers\AdminController@dashboard');