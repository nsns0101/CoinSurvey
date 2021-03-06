<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest', ['except' => 'destroy']);
    }

    public function index()
    {
        return view('welcome');
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        if (!auth()->attempt($request->only('email', 'password'), $request->has('remember'))) {
            return response()->json([
                'status' => false
            ]);
        }
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        auth()->logout();
    }
}
