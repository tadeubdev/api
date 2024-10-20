<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    /**
     * Handle an incoming authentication request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (!auth()->attempt($credentials)) {
            return response()->json(['message' => 'Unauthorized'], 401);
        }

        $token = auth()->user()->createToken('authToken')->plainTextToken;
        return response()->json(['token' => $token]);
    }
}
