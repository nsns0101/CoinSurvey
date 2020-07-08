<?php

use Illuminate\Support\Facades\Route;

//메인 페이지
Route::get('/', function () {
    return view('welcome');
});

//로그인, 회원가입 페이지
Route::get('/auth/{page}', 'AuthController@index');
